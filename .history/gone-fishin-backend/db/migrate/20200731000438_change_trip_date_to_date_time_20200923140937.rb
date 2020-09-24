class ChangeTripDateToDateTime < ActiveRecord::Migration[6.0]
  def change
    change_column :trips, :date, :dates
  end
end
