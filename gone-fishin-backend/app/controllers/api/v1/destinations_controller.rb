class Api::V1::DestinationsController < ApplicationController

    def index
        @destinations = Destination.all
        render json: @destinations
    end

end
