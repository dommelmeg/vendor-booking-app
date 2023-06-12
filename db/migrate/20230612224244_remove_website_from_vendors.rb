class RemoveWebsiteFromVendors < ActiveRecord::Migration[6.1]
  def change
    remove_column :vendors, :website, :string
  end
end
