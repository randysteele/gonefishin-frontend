class DestinationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :city, :state, :description, :comment_id, :feature_id
end
