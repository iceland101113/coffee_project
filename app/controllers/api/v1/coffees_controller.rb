class Api::V1::CoffeesController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  def index
    @user_position = params[:position]
    puts @user_position[:latitude]
    puts @user_position[:longitude]
    coffees = []
    CoffeeDatum.all.each do |coffee|
      if coffee.lat_dist_1(@user_position[:latitude]) && coffee.lon_dist_1(@user_position[:longitude])
        coffees << coffee
      end      
    end
    ## 先得到 位置的所在城市，再去找 最近的點？
    puts coffees.length
    puts coffees.first.longitude
    puts "===="
     render json: {
        data: coffees
      }
  end
end