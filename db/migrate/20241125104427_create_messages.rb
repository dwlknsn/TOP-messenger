class CreateMessages < ActiveRecord::Migration[8.0]
  def change
    create_table :messages do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :body, null: false

      t.timestamps
    end
  end
end