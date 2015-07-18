class Article2
  attr_accessor :body, :title, :date, :file_path

  FILE_EXT = '.md.erb'

  def initialize(title, body, date = false, published = false)
    @raw_title = title
    @raw_body = body
    @date = date ? Date.parse(date) : Time.now
    @published = published
  end

  def published?
    @published
  end

  def body
    Renderer::render(@raw_body)
  end

  def title
    Typogruby.improve(@raw_title)
  end

  def excerpt(length = 150)
    body.gsub(%r{</?[^>]+?>}, '')[0..length - 1] + '…'
  end

  def slug
    @raw_title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  end

  def url
    '/articles/' + slug
  end


  # File management

  def file_path
    folder = '/articles/'
    date_str = @date.strftime('%Y-%m-%d')
    title_str = @raw_title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

    @file_path || folder + date_str + '-' + title_str + FILE_EXT
  end

  def file_content
    file_content =  "---\n"
    file_content += "title: #{@raw_title}\n"
    file_content += "date: #{@date.strftime('%Y-%m-%d %k:%M')} EST\n"
    file_content += "published: #{published?}\n"
    file_content += "---\n\n"
    file_content += @raw_body
    file_content
  end


  # Initializers

  def self.init_from_slug(slug)
    file_path = Dir["**/*#{slug}#{FILE_EXT}"][0]
    self.init_from_file_path(file_path)
  end

  def self.init_from_file_path(file_path)
    @file_path = file_path
    file = File.new(file_path).read
    data = YAML.load_file(file_path)

    title = data['title']
    date = data['date'] || file_path[/\d{4}-\d{2}-\d{2}/]
    body = Renderer::render file.sub(/---[\s\S]*?---/, '')
    published = true unless data['published'] == false

    Article2.new(title, body, date, published)
  end

end
