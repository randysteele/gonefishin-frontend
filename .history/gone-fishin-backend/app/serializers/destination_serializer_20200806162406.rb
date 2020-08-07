class DestinationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :city, :state, :description
  has_many :features 
 # has_many :comments
end
