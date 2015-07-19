class App < Sinatra::Base

  before do
    @current_page = current_page
    @articles = articles
    @nav = nav
  end

  get '/' do
    erb :index
  end

  not_found do
    status 404
    '404. You broke something.'
  end

  get '/articles' do
    @title = "Articles"
    erb :articles
  end

  put '/articles/new' do
    article = Article.new(params)
    Github.updateArticle article
    {message: 'Success!'}.to_json
  end

  get '/portfolio' do
    @title = "Portfolio"
    erb :portfolio, locals: { projects: projects }
  end

  get '/portfolio/:slug' do
    not_found unless Dir["projects/*#{params[:slug]}.md.erb"][0]

    project = Project.new(params[:slug])
    @title = project.title

    erb :layout, layout: false do
      erb :project, locals: { project: project }
    end
  end

  get '/about' do
    @title = "About"
    erb :about
  end

  get '/rss' do
    builder :rss
  end

  get '/articles.json' do
    content_type :json, 'charset' => 'utf-8'
    array = []
    articles(drafts: true).each do |article|
      array << {
        title: article.data['title'],
        excerpt: article.excerpt,
        body: article.markdown_body,
        date: article.date.to_s,
        published: article.published? ? "true" : "false"
      }
    end
    array.to_json
  end

  get '/articles/:slug' do
    file_path = Dir["**/*#{params[:slug]}.md.erb"][0]
    not_found unless file_path

    article = Article.init_from_file_path(file_path)
    @title = article.title

    erb :layout, layout: false do
      erb :article, locals: { article: article }
    end
  end

  get '/articles/:slug/edit' do
    @article = Article.new(slug: params[:slug])
    erb :edit_article
  end

  def nav
    [
      {title: 'Home', url: '/'},
      {title: 'Articles', url: '/articles'},
      {title: 'Portfolio', url: '/portfolio'},
      {title: 'About', url: '/about'}
    ]
  end

  def current_page
    request.path[/(^\/[^\/]*)/]
  end

  def articles(options={})
    articles = []

    Dir["articles/*"].each do |file_path|
      article = Article.init_from_file_path(file_path)
      condition = options[:drafts] || article.published?
      articles.insert(0, article) if condition
    end

    articles.sort! {|a, b| b.date <=> a.date}
  end

  def projects
    projects = []

    Dir["projects/*"].each do |file_path|
      slug = /\/(.*?)\.md\.erb/.match(file_path)[1]
      project = Project.new(slug)
      projects.insert(0, project) if project.published?
    end

    projects
  end

end

require_relative 'helpers/helpers'
require_relative 'models/models'
require_relative 'models/twitter'
