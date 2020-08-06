class Api::V1::DestinationsController < ApplicationController

    def index
        @destinations = Destination.all
        render json: @destinations
    end

    def create 
        @destination = Destination.new(destination_params)
        if @destination.save 
            render json: @destination
        else
            render json: {error: 'Cannot Create Destination'}
        end
    end        

    def show 
        @destination = Destination.find_by(params[:id])
        render json: @destination
    end

    def destroy 
        @destination = Destination.find(params[:id])
        @destination.destroy
    end


    private
    
    def destination_params
        params.require(:destination).permit(:name, :city, :state, :description)
    end
end
