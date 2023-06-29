class RemovePriceRangeFromVendors < ActiveRecord::Migration[6.1]
  def change
    remove_column :vendors, :price_range, :string
  end
end
