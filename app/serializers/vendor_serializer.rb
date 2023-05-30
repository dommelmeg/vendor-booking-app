class VendorSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :website, :price_range
end
