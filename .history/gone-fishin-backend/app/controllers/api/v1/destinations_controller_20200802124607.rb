class Api::V1::DestinationsController < ApplicationController

    def index
        destinations = Destination.all
        render json: DestinationSerializer.new(destinations).serialized_json       
    end

    def create 
        destination = Destination.new(destination_params)
        if destination.save 
            render DestinationSerializer.new(destination)
        else
            render json: {error: 'Cannot Create Destination'}
        end
    end

        

    def show 
        destination = Destination.find_by(params[:id])
        render json: DestinationSerializer.new(destination) 
    end

    private
    
    def destination_params
        params.require(:destination).permit(:name, :city, :state, :description, :feature_id, :comment_id)
    
end
