class VendorReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_id, :vendor_id
end
