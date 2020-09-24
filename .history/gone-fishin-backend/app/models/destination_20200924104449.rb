class Destination < ApplicationRecord
    has_many :features
    has_many :feature
    has_many :comments
    # has_many :trips 
    
end
