class Event < ApplicationRecord
  belongs_to :user
  belongs_to :vendor, optional: true

  validates :event_name, presence: true
  # validates :date, greater_than_or_equal_to: Date.today
end
