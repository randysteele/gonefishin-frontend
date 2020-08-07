class FeatureSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :destination_id
  belongs_to :destination

end
