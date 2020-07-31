class DestinationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :city, :state, :description
end
