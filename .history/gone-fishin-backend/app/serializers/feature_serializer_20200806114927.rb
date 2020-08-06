class FeatureSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :destination_id

end
