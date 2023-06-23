class VendorReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_id
end
