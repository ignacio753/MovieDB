require_relative '../support/sessionable'
include Sessionable

When(/^I authenticate for movies data$/) do
  user = User.find_by(email: 'user1@moviedb.com')
        puts '*************'
        puts user.id
        puts Knock::AuthToken.new(payload: { sub: 1 }).inspect
        token = Knock::AuthToken.new(payload: { sub: user.id }).token
  #header 'Authorization', auth_key_for_user('user1@moviedb.com')
  header 'Authorization', "Bearer #{token}"
end

Then(/^I should find the response schema consistent for movies index action$/) do
  response = get('/api/v1/movies/')

  row_node_schema = YAML.load(File.read('features/support/schemas/api/v1/movies/index.yml'))
  JSON::Validator.validate!(row_node_schema, response.body, strict: true) unless Oj.load(response.body).blank?
end