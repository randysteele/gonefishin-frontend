class Destination < ApplicationRecord
    has_many :comments
    has_many :trips 
end
