class RemoveEventTypeFromEvents < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :event_type, :string
  end
end
