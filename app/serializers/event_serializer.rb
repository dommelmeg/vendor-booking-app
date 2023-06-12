class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :band_id, :event_name, :date, :rating, :review, :image_url
end
