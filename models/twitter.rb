class Twitter

  def Twitter.tweet_url(text, url)
    URI.escape("https://twitter.com/intent/tweet?text=#{text}&url=#{url}")
  end

  def Twitter.tweet_count(url)
    request = JSON(RestClient.get("http://urls.api.twitter.com/1/urls/count.json?url=#{url}"))
    request["count"]
  end

  def Twitter.tweet_count_message(url)
    count = tweet_count(url)

    if count == 0
      "Be the first!"
    elsif count == 1
      "Only one person has shared it already"
    else
      "#{'Only' if count < 5 } #{count} others have shared it already"
    end
  end

end
