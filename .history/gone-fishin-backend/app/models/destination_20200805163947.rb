class Destination < ApplicationRecord
    has_many :comments
    has_many :trips 
    has_many :features
end
