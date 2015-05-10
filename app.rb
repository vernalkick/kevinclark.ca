class App < Sinatra::Base

  before do
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
    erb :portfolio
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

  get '/articles/:slug' do
    not_found unless Dir["articles/*#{params[:slug]}.md.erb"][0]

    @article = Article.new(slug: params[:slug])

    erb :layout, layout: false do
      erb render_markdown(@article.body), layout: :article
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

  def articles
    articles = []

    Dir["articles/*"].each do |file_path|
      article = Article.new(file_path: file_path)
      articles.insert(0, article) if article.published?
    end

    articles.sort! {|a, b| b.date <=> a.date}
  end

end

require_relative 'helpers/helpers'
require_relative 'models/models'
