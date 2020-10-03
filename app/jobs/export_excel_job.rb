class ExportExcelJob < ApplicationJob
  queue_as :default

  def perform()
    # # Do something later
    # @coffees = CoffeeDatum.find(coffee_ids)
    # # coffee_shops.to_xls
    # respond_to do |format|
    #   format.xls
    # end  
  end
end