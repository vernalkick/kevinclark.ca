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

  get '/articles/:slug' do
    @article = Article.new(slug: params[:slug])

    redirect '/404' unless @article.exists?

    erb :article
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

    articles
  end

end

require_relative 'helpers/helpers'
require_relative 'models/models'
