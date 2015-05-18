require_relative '../helpers/renderer'

class Project
  attr_accessor :title, :body, :url, :meta, :slug, :content

  def initialize(slug)
    file_path = Dir["projects/*#{slug}.md.erb"][0]

    @slug = slug
    @meta = YAML.load_file(file_path)
    @content = File.new(file_path).read.sub(/---[\s\S]*?---/, '')
  end

  # TITLE
  # Improve title string to remove orphans
  def title
    Typogruby.improve meta['title']
  end

  # URL
  # Link to the post
  def url
    URL::BASE_URL + "/portfolio/#{slug}"
  end

  def published?
    true if @meta['published'] != false
  end

  def thumbnail
    "/assets/portfolio/#{slug}/thumbnail.jpg"
  end

  def description
    meta['description']
  end

  # LINK
  # Link to a live version of the project
  def link
    meta['link']
  end

  # ELSEWHERE
  def elsewhere_links
    return false unless meta['elsewhere']

    elsewhere_list = []

    meta['elsewhere'].each do |hash|
      elsewhere_list << Struct.new(:title, :link).new(*hash.values)
    end

    elsewhere_list
  end

  def hero_image_url
    "/assets/portfolio/#{slug}/#{meta['hero_image']}" if meta['hero_image']
  end

  # BODY
  # Main content of the article
  def body
    Renderer::render content
  end
end
