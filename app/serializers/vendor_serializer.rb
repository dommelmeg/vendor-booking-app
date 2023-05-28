class VendorSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :city, :state, :website, :price_range
end
