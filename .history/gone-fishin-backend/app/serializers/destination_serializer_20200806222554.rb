class DestinationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :city, :state, :description 
  has_many :features 
end
