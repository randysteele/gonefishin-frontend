class Api::V1::CommentsController < ApplicationController

    def index
        @comments = Comment.all
       # render json: @comments 
        CommentSerializer.new(@comments)
    end



end
