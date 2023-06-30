class VendorSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre

  has_many :events, serializer: VendorReviewSerializer
end
