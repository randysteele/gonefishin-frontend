class FeatureSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :destination_id
  belongs_to :destination

end
