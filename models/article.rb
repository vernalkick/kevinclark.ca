class Article
  attr_reader :data, :markdown_body, :filename

  # Initializer
  def initialize(args={}, filename)
    @data = {
      "title" => args['title'],
      "date" => args['date'] || Time.now.to_s,
      "published" => args['published']
    }

    @markdown_body = args['body']
    @markdown_body.sub!(/^\n*/, '') # Remove leading linebreaks
    @filename = filename
  end

  def self.init_from_file_path(file_path)
    file = File.new(file_path).read
    filename = File.basename(file_path)

    file_data = YAML.load_file(file_path)
    file_data['date'] ||= file_path[/\d{4}-\d{2}-\d{2}/]
    file_data['body'] = file.sub(/---[\s\S]*?---/, '')

    Article.new(file_data, filename)
  end

  # Properties

  def title
    Typogruby.improve(@data['title'])
  end

  def body
    Typogruby.improve(Renderer::render(@markdown_body))
  end

  def date
    date = @data['date']
    date.is_a?(DateTime) ? date : DateTime.parse(date)
  end

  def excerpt(length = 150)
    body.gsub(%r{</?[^>]+?>}, '')[0..length - 1] + '…'
  end

  def published?
    @data['published']
  end

  def url
    slug = filename
    slug = slug.sub(/\d{4}-\d{2}-\d{2}-/, '')   # Strip date
    slug = slug.sub(/\.md(\.erb)?/, '')         # Strip extension

    '/articles/' + slug
  end

  # File management

  def file_content
    @data.to_yaml + "---\n\n" + @markdown_body
  end

  def file_path
    '/articles/' + filename
  end

end
