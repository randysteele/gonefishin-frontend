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

def destroy 
    feature = Feature.find(params["id"])
    destination = destination.find(feature.destination_id)
    feature.destory
    render json: destination
end

private 

def set_destination
    destination = Destination.find([params[:destination_id]])
end

def feature_params
    params.require(:feature).permit(:name, :destination_id)
end

end
