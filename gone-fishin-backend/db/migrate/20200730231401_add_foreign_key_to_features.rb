class AddForeignKeyToFeatures < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :destinations, :feature
  end
end
