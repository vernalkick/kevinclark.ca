class Article

  # Initializer
  def initialize(args={})
    @data = {
      "title" => args['title'],
      "date" => args['date'] || Time.now.to_s,
      "published" => args['published'] || false
    }

    @body = args['body']
  end

  def self.init_from_file_path(file_path)
    file = File.new(file_path).read

    file_data = YAML.load_file(file_path)
    file_data['body'] = file.sub(/---[\s\S]*?---/, '')

    Article.new(file_data)
  end

  # Properties

  def title
    Typogruby.improve(@data['title'])
  end

  def body
    Renderer::render(@body)
  end

  def date
    Date.parse(@data['date'])
  end

  def excerpt(length = 150)
    body.gsub(%r{</?[^>]+?>}, '')[0..length - 1] + '…'
  end

  def published?
    @data['published']
  end

  def url
    "/articles/#{slug}"
  end

  # File management

  def file_content
    @data.to_yaml + "---\n\n" + @body
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
