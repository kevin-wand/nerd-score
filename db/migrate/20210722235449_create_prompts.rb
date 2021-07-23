class CreatePrompts < ActiveRecord::Migration[6.1]
  def change
    create_table :prompts do |t|
      t.text :question
      t.text :answer
      t.text :choice1
      t.text :choice2
      t.text :choice3

      t.timestamps
    end
  end
end
