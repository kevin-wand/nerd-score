class Category < ApplicationRecord
  has_many :prompts, dependent: :destroy
end
