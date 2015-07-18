class Article3
  def initialize(data, body)
    @data = data
    @body = body
  end

  def title
    Typogruby.improve(@data['title'])
  end

  def body
    Renderer::render(@body)
  end

  def excerpt(length = 150)
    body.gsub(%r{</?[^>]+?>}, '')[0..length - 1] + '…'
  end

  def date
    date = @data['date']
    date ? Date.parse(date) : Time.now
  end

  def published?
    @data['published']
  end

  def slug
    @data['title'].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  end

  def filename
    date.strftime('%Y-%m-%d') + '-' + slug + '.md.erb'
  end

  def filecontent
    filecontent = @data.to_yaml
    filecontent += "---\n\n"
    filecontent += @body
  end
end




# class File
#   def initialize(path, filename, content)
#     @path = path
#     @filename = filename
#     @content = content
#   end
# end
