class Article
  attr_reader :data, :markdown_body

  # Initializer
  def initialize(args={})
    @data = {
      "title" => args['title'],
      "date" => args['date'] || Time.now.to_s,
      "published" => args['published']
    }

    @markdown_body = args['body']
    @markdown_body.sub!(/^\n*/, '') # Remove leading linebreaks
  end

  def self.init_from_file_path(file_path)
    file = File.new(file_path).read
    puts file_path
    puts file

    file_data = YAML.load_file(file_path)
    file_data['date'] ||= file_path[/\d{4}-\d{2}-\d{2}/]
    file_data['body'] = file.sub(/---[\s\S]*?---/, '')

    Article.new(file_data)
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
    @data['published'] == true || @data['published'] == 'true'
  end

  def url
    "/articles/#{slug}"
  end

  # File management

  def file_content
    @data.to_yaml + "---\n\n" + @markdown_body
  end

  def file_name
    "#{date.strftime('%Y-%m-%d')}-#{slug}.md.erb"
  end

  def file_path
    "/articles/#{file_name}"
  end

  private

  def slug
    sep = '-'

    slug = @data['title'].downcase.strip
    slug.gsub!(/[^a-z0-9\-_\?]+/, sep)

    re_sep = Regexp.escape(sep)

    # No more than one of the separator in a row.
    slug.gsub!(/#{re_sep}{2,}/, sep)
    # Remove leading/trailing separator.
    slug.gsub!(/^#{re_sep}|#{re_sep}$/, '')

    slug
  end
end
