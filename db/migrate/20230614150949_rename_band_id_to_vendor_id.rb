class RenameBandIdToVendorId < ActiveRecord::Migration[6.1]
  def change
    rename_column :events, :band_id, :vendor_id
  end
end
