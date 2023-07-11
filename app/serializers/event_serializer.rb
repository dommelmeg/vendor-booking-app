class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :vendor_id, :event_name, :date, :rating, :review, :image_url, :username, :vendor

  belongs_to :vendor
end
