class RemoveTrips < ActiveRecord::Migration[6.0]
  def change
    remove_table :trips
  end
end
