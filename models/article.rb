class Article
  attr_accessor :body, :title, :file_path, :url, :metadata

  def initialize(params={})
    slug = params[:slug] || slug_from_path(params[:file_path])

    @file_path = Dir["articles/*#{slug}.md.erb"][0]

    return unless @file_path

    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, highlight: true)

    @metadata = YAML.load_file(@file_path)

    @body = markdown.render(File.new(@file_path).read.split(/---/, )[2]).strip
    @title = Typogruby.improve metadata['title']
    @url = "/articles/#{slug}"
  end

  def exists?
    true if @file_path
  end

  def published?
    true if metadata['published'] != false
  end

  def excerpt(length = 150)
    @body.gsub(%r{</?[^>]+?>}, '')[0..length - 1] + '…'
  end

  private

  def path_from_slug(slug)
    Dir["articles/*#{slug}.md.erb"][0]
  end

  def slug_from_path(path)
    /\d{4}-\d{2}-\d{2}-(.*?)\.md\.erb/.match(path)[1]
  end
end
