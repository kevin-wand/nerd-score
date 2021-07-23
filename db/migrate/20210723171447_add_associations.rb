class AddAssociations < ActiveRecord::Migration[6.1]
  def change
    add_reference(:prompts, :category, foreign_key: true)
    add_reference(:prompts, :user, foreign_key: true)
  end
end
