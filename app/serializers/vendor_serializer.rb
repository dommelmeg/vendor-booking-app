class VendorSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :price_range
end
