class Event < ApplicationRecord
  belongs_to :user
  belongs_to :vendor, optional: true

  validates :event_name, presence: true
  validate :date_cannot_be_in_the_past
  # validates :vendor_id, presence: true

  def date_cannot_be_in_the_past
    if date.present? && date < Date.today
      errors.add(:date, "can't be in the past")
    end
  end
end
