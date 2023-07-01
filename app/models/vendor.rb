class Vendor < ApplicationRecord
  has_many :events
  has_many :users, through: :events

  GENRES = ['Jazz', 'Rock', 'Pop', 'Hip Hop', 'Country', 'Punk', 'Classical', 'Reggae', 'Folk', 'Electronic Dance Music', 'Blues', 'Metal', 'Acapella']

  validates :name, presence: true
  validates :genre, inclusion: {
    in: GENRES,
    message: "must be one of: #{GENRES.join(', ')}"
  }

end
