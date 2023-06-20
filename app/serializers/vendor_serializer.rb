class VendorSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :price_range

  has_many :events, serializer: VendorReviewSerializer
end
