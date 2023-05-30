class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :band_id, :event_name, :date, :event_type, :rating, :review
end
