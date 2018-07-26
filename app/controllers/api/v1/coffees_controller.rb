class Api::V1::CoffeesController < ApplicationController
  def index
    @coffees = CoffeeDatum.all
     render json: {
        data: @coffees
      }
  end
end