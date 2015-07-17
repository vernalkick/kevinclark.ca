class Github
  def self.newArticle(title, body, published)
    path = '/articles/'
    filename = filename(title)
    file_content = generateFileContent(title, body, Time.now, published)
    puts filename
  end

  def self.filename(title)
    date_str = Time.now.strftime('%Y-%m-%d')
    title_str = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
    return date_str + '-' + title_str + '.md'
  end

  def self.generateFileContent(title, body, date, published)
    file_content =  "---\n"
    file_content += "title: #{title}\n"
    file_content += "date: #{date.strftime('%Y-%m-%d %k:%M')} EST\n"
    file_content += "published: #{published}\n"
    file_content += "---\n\n"
    file_content += body
    file_content
  end
end
