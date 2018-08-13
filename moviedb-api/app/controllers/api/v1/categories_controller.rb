module Api::V1
  class CategoriesController < ApplicationController
    before_action :authenticate_user
  end
end