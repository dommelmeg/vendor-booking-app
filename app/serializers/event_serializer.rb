class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :band_id, :date, :type, :rating, :review
end
