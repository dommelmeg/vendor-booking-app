class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :vendor_id, :event_name, :date, :rating, :review, :image_url

  belongs_to :vendor
end
