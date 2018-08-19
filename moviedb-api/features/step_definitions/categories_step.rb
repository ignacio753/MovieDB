require_relative '../support/sessionable'
include Sessionable

When(/^I authenticate for categories data$/) do
  header 'Authorization', auth_key_for_user('user1@moviedb.com')
end

Then(/^I should find the response schema consistent for list of categories$/) do
  response = get('/api/v1/categories/')
  category_node_schema = YAML.load(File.read('features/support/schemas/api/v1/categories/index.yml'))
  
  response_sample_node = Oj.load(response.body).shuffle.first
  JSON::Validator.validate!(category_node_schema, response_sample_node, strict: true) unless Oj.load(response.body).blank?
end