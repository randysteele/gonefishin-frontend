class Api::V1::FeaturesController < ApplicationController

    def index
        features = Feature.all
        render json: FeatureSerializer.new(features) 
    end

    def show 
        feature = Feature.find(params[:id])
        render json :transaction
    end

    def create 
        feature = destination.features.new(feature_params)
      if destination.save
        render json: feature
    else
        render json: {Error: "NOT FOUND"}
    end
end

end
