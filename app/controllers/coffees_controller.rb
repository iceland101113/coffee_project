class CoffeesController < ApplicationController
  def index
    @coffees = CoffeeDatum.all
  end
end
