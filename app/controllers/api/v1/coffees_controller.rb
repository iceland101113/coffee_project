class Api::V1::CoffeesController < ApiController

  def index
    @coffees = CoffeeDatum.all.map do |coffee|
      {  
        title: coffee.name, 
        open_time: coffee.open_time, 
        address: coffee.address, 
        url: coffee.url, 
        location: { 
          lat: coffee.latitude.to_f, 
          lng: coffee.longitude.to_f
        }, 
        wifi: coffee.wifi.to_i, 
        seat: coffee.seat.to_i, 
        quiet: coffee.quiet.to_i, 
        tasty: coffee.tasty.to_i, 
        cheap: coffee.cheap.to_i, 
        music: coffee.music.to_i   
      }  
    end

    render json: {
      data: @coffees
    }
  end
end