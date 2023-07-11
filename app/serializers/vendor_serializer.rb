class VendorSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre

  has_many :events
  has_many :users, through: :events
end
