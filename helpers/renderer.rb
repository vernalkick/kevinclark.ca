module Renderer
  def Renderer.render(body)
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, highlight: true, footnotes: true)
    markdown.render(ERB.new(body).result(binding))
  end

  def embed_svg(filename, options={})
    file = File.read("assets/images/#{filename}.svg")
    doc = Nokogiri::HTML::DocumentFragment.parse file
    svg = doc.at_css 'svg'
    if options[:class] != nil
      svg['class'] = options[:class]
    end
    doc.to_html
  end

  def typography(string)
    string
  end

  def Renderer.figure(url, caption = nil, options={})
    types = {
      image: /.*\.(png|gif|jpe?g|svg)/,
      video: /https?:\/\/.*youtube\.com.+?v=(\S+)/
    }

    classes = options[:class] || 'figure--extend-right'

    if url =~ types[:image]
      content = "<img src='#{url}' alt='#{strip_html(caption) || "Post image"}' />"
    elsif url =~ types[:video]
      content =  "<div class='fluid-width-video-wrapper'>"
      content += "<iframe src='//www.youtube.com/embed/#{$1}' allowfullscreen></iframe>"
      content += "</div>"
    end

    markup =  "<figure class='#{classes}'>"
    markup += content if content
    markup += "<figcaption>#{caption}</figcaption>" if caption
    markup += "</figure>"
    markup
   end

   def strip_html(string)
      string.gsub(%r{</?[^>]+?>}, '')
   end

end
