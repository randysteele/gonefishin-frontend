class AddDestinationsToComment < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :destination_id, :integer
  end
end



  20200730231401 AddForeignKeyToFeatures
  # 20200730231756 AddIdToDestinations
  # 20200730233507 CreateComments 
  # 20200730235619 CreateTrips
  # 20200731000438 ChangeTripDateToDateTime
  # 20200731185102 AddCommentsToDestinations
  # 20200804151009 RemoveFeaturesAndCommentsFromDestinations
  # 20200804154200 AddDestinationsToComment
  # 20200804154224 AddDestinationsToFeature
  # 20200810222534 RemoveTrips
  # 20200917192413 DeviseCreateAdminUsers
  # 20200917192417 CreateActiveAdminComments