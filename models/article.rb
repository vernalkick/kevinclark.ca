require_relative '../helpers/renderer'

class Article
  attr_accessor :body, :title, :file_path, :url, :data

  def initialize(params={})
    slug = params[:slug] || slug_from_path(params[:file_path])
    @slug = slug

    @file_path = Dir["articles/*#{slug}.md.erb"][0]

    @data = YAML.load_file(@file_path)
  end


  # METADATA
  #########################################################

  # TITLE
  # Improve title string to remove orphans
  def title
    Typogruby.improve data['title']
  end

  # PUBLISHED?
  # Returns whether the article
  def published?
    true if @data['published'] != false
  end

  # DATE
  # Publish date of the article
  def date
    Date.parse(data['date'] || file_path[/\d{4}-\d{2}-\d{2}/])
  end

  # URL
  # Link to the post
  def url
    "/articles/#{@slug}"
  end


  # CONTENT
  #########################################################

  # BODY
  # Main content of the article
  def body
    file = File.new(file_path).read
    Renderer::render file.sub(/---[\s\S]*?---/, '')
  end

  # EXCERPT
  # Plain text summary of the body of the article
  def excerpt(length = 150)
    body.gsub(%r{</?[^>]+?>}, '')[0..length - 1] + '…'
  end


  # PRIVATE METHODS
  #########################################################

  private

  def path_from_slug(slug)
    Dir["articles/*#{slug}.md.erb"][0]
  end

  def slug_from_path(path)
    /\d{4}-\d{2}-\d{2}-(.*?)\.md\.erb/.match(path)[1]
  end

  def file_path
    Dir["articles/*#{@slug}.md.erb"][0]
  end
end
