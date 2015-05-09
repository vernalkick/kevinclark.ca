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

  get '/about' do
    erb :about
  end

  get '/articles/:slug' do
    not_found unless Dir["articles/*#{params[:slug]}.md.erb"][0]

    @article = Article.new(slug: params[:slug])
    @article.body

    erb :layout, layout: false do
      erb render_markdown(@article.body), layout: :article
    end

    # markdown ERB.new(@article.body).result(binding), layout_engine: :erb, layout: :article
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
      # article.body = render_markdown(article.body)
      articles.insert(0, article) if article.published?
    end

    articles.sort! {|a, b| b.date <=> a.date}
  end

end

require_relative 'helpers/helpers'
require_relative 'models/models'
