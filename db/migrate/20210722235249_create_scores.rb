class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.boolean :is_correct
      t.references :user, null: false, foreign_key: true
      t.references :prompt, null: false, foreign_key: true

      t.timestamps
    end
  end
end
