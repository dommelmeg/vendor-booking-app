class Event < ApplicationRecord
  belongs_to :user
  belongs_to :vendor, optional: true

  validates :event_name, presence: true
end
