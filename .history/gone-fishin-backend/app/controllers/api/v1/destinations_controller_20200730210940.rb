class Api::V1::DestinationsController < ApplicationController

    def index
        destinations = Destination.all
        render json: DestinationSerializer.new(destinations).serialized_json       
    end

    def show 
        destination = Destination.find_by(params[:id])
        render json: DestinationSerializer.new(destination)
        render json: DestinationSerializer.new(track) 
    end

end
