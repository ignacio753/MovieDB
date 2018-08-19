# MovieDB

This is the API and client application for the MovieDB site.

## Technology

* Ruby 2.3.1
* Rails 5.0.7
* React 16.4.2

## Installation

* `git clone  <repository-url>` this repository
* Install dependencies:
* `cd moviedb-api && bundle install`
* `cd ./moviedb-client && yarn install && cd ../`

## Running / Development

The 'start' rake task invokes a foreman script that runs a Procfile for development under Procfile.dev, it 'npm start' and 'rails s' the app

* `rake start`

### Building

The Rails app serves the Webpack bundle using NPM's postinstall command from the package.json file inside the moviedb-api folder, Heroku runs the build and moves the files to the /public folder

### Deploying

The app uses Heroku for deployment, so just run the following command and the configuration will pick up the rest:

* `git push heroku master`

## Running Tests

To run tests, seed the db with test data, from api folder:
```bash
rake db:test:prepare
```

To run the API test suite with cucumber just run from the api folder:
```bash
RAILS_ENV=test bundle exec cucumber
```

To run the Front-end test with Jest just run from the client folder:
```bash
   npm test
```
