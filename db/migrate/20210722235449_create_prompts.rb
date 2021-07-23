class CreatePrompts < ActiveRecord::Migration[6.1]
  def change
    create_table :prompts do |t|
      t.text :question
      t.text :choice1
      t.text :choice2
      t.text :choice3
      t.text :choice4
      t.text :answer
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
