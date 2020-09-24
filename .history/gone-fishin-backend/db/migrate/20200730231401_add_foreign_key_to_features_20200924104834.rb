class AddForeignKeyToFeatures < ActiveRecord::Migration[6.0]
  def change
    add_reference :destinations, :features, foreign_key: true 
    add_index :destinations, :features, index: true 
  end
end
