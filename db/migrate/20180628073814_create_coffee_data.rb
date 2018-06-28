class CreateCoffeeData < ActiveRecord::Migration[5.1]
  def change
    create_table :coffee_data do |t|
      t.string :name
      t.integer :wifi
      t.integer :seat
      t.integer :quiet
      t.integer :tasty
      t.integer :cheap
      t.integer :music
      t.string :address
      t.string :latitude
      t.string :longitude
      t.string :url
      t.string :limited_time
      t.string :socket
      t.string :standing_desk
      t.string :mrt
      t.string :open_time

      t.timestamps
    end
  end
end
