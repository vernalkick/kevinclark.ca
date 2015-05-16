xml.instruct! :xml, :version => '1.0'
xml.rss :version => "2.0" do
  xml.channel do
    xml.title "Kevin Clark"
    xml.description "I’m a Product Designer at Shopify, I run the Montreal Dribbble meetups and make apps in my spare time. I live and work in the beautiful city of Montreal."
    xml.link "http://kevinclark.ca"

    @articles.each do |article|
      xml.item do
        xml.title article.title
        xml.link "#{request.env['rack.url_scheme']}://#{request.env['HTTP_HOST']}#{article.url}"
        xml.descrition do
          xml.cdata!(article.body)
        end
        xml.pubDate Time.parse(article.date.to_s).rfc822()
        xml.guid article.url
      end
    end
  end
end
