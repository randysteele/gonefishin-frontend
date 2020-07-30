class Api::V1::FeaturesController < ApplicationController

    def index
        @features = Feature.all
        render json: @features 
    end
end
