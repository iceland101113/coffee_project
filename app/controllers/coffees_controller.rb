class CoffeesController < ApplicationController
  def index
    @coffees = CoffeeDatum.all

    respond_to do |format|
      format.html
      format.xls
    end
  end
end
