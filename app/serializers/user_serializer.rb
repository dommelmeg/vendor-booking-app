class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :events
  has_many :vendors, through: :events
end

#user or vendor can see all 
