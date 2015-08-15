desc 'Create a new article'
task :article do
  title = ENV['title']
  file_name = "#{Time.now.strftime('%Y-%m-%d')}-#{slug(title)}.md"
  file_content = <<EOM
---
title: #{title}
date: #{Time.now.strftime('%Y-%m-%d %H:%M')} EDT
published: true
---
EOM

  out_file = File.new("articles/#{file_name}", "w")
  out_file.puts(file_content)
  out_file.close

  puts out_file.path
end

private

def slug(title)
  sep = '-'

  slug = title.downcase.strip
  slug.gsub!(/[^a-z0-9\-_\?]+/, sep)

  re_sep = Regexp.escape(sep)

  # No more than one of the separator in a row.
  slug.gsub!(/#{re_sep}{2,}/, sep)
  # Remove leading/trailing separator.
  slug.gsub!(/^#{re_sep}|#{re_sep}$/, '')

  slug
end
