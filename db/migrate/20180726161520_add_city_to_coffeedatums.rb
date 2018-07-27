class AddCityToCoffeedatums < ActiveRecord::Migration[5.1]
  def change
    add_column :coffee_data, :city, :string
  end
end
