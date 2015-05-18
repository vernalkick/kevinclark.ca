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
    erb :articles
  end

  get '/portfolio' do
    erb :portfolio, locals: { projects: projects }
  end

  get '/portfolio/:slug' do
    not_found unless Dir["projects/*#{params[:slug]}.md.erb"][0]

    project = Project.new(params[:slug])

    erb :layout, layout: false do
      erb :project, locals: { project: project }
    end
  end

  get '/about' do
    erb :about
  end

  get '/rss' do
    builder :rss
  end

  get '/articles/:slug' do
    not_found unless Dir["articles/*#{params[:slug]}.md.erb"][0]

    article = Article.new(slug: params[:slug])

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

  def articles
    articles = []

    Dir["articles/*"].each do |file_path|
      article = Article.new(file_path: file_path)
      articles.insert(0, article) if article.published?
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
