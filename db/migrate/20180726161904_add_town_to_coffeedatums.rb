class AddTownToCoffeedatums < ActiveRecord::Migration[5.1]
  def change
    add_column :coffee_data, :town, :string
  end
end
