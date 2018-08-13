class Movie < ApplicationRecord
    belongs_to :category
    belongs_to :user

    alias_attribute :created_by, :user_id
end
