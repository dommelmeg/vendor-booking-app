class Vendor < ApplicationRecord
  has_many :events
  has_many :users, through: :events

  validates :name, presence: true, uniqueness: true
  validates :genre, presence: true
end
