class CreateVendors < ActiveRecord::Migration[6.1]
  def change
    create_table :vendors do |t|
      t.string :name
      t.string :genre
      t.string :website
      t.integer :price_range

      t.timestamps
    end
  end
end
