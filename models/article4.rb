class Article4

  # Initializer
  def initialize(args={})
    @data = {
      "title" => args['title'],
      "date" => args['date'] || Time.now.to_s,
      "published" => args['published'] || false
    }

    @body = args['body']
  end

  # def initialize(title, body, date = Time.now.to_s, published = false)
  #   @data = {
  #     "title" => title,
  #     "date" => date,
  #     "published" => published
  #   }

  #   @body = body
  # end

  def self.init_from_file_path(file_path)
    file = File.new(file_path).read

    file_data = YAML.load_file(file_path)
    file_data['body'] = file.sub(/---[\s\S]*?---/, '')

    Article4.new(file_data)
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
    @data['title'].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  end
end
