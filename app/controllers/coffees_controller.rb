class CoffeesController < ApplicationController
  def index
    @coffees = CoffeeDatum.all

    respond_to do |format|
      format.html
      format.xls do 
        ExportExcelJob.set(wait: 20.seconds).perform_later()
        # redirect_to coffees_path
      end
    end
  end

  # def get_excel
  #   @coffee_ids = CoffeeDatum.all.ids
  #   ExportExcelJob.perform_later(@coffee_ids)
  #   # @coffees = CoffeeDatum.all
  #   # respond_to do |format|
  #   #   format.xls
  #   # end    
  #   redirect_to root_path
  # end
end
