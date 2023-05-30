class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.integer :user_id
      t.integer :band_id
      t.string :event_name
      t.date :date
      t.string :event_type
      t.integer :rating
      t.text :review

      t.timestamps
    end
  end
end
