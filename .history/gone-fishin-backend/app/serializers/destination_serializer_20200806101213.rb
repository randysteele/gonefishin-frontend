class DestinationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :city, :state, :description, :features
  has_many :features 
  has_many :comments
end
