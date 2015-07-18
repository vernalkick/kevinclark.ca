require 'base64'

class Github
  BASE_URL = "https://api.github.com/repos/vernalkick/kevinclark.ca/contents"
  HEADERS = {
    Authorization: "token 79e5173337ad4c771ec821a726c365e1c71d4f37"
  }

  def self.updateArticle(data)
    article = Article.new(data)
    endpoint = BASE_URL + article.file_path

    begin
      response = JSON RestClient.get(endpoint, HEADERS)
      sha = response['sha']
    rescue
    end

    params = {
      message: "[#{sha ? 'Update' : 'New'} Post] #{article.data['title']}",
      content: Base64.encode64(article.file_content),
      sha: sha,
      committer: {
        name: "Kevin Clark",
        email: "kevin@kevinclark.ca"
      }
    }.to_json

    RestClient.put endpoint, params, HEADERS
  end
end
