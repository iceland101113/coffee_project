class AddCountyIdToCoffeeDatums < ActiveRecord::Migration[5.1]
  def change
    add_reference :coffee_data, :county, foreign_key: true
  end
end
