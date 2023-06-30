class ChangeDatetimeToDateInEvents < ActiveRecord::Migration[6.1]
  def change
    change_column :events, :date, :date
  end
end
