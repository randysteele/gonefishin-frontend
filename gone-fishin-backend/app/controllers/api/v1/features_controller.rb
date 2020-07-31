class Api::V1::FeaturesController < ApplicationController

    def index
        @features = Feature.all
        render json: FeatureSerializer.new(@features) 
    end
end
