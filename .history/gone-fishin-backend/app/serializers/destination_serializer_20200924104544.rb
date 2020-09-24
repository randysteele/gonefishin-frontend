class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :description
  has_many :features 
  has_many :comments
  has_many :feature
end
