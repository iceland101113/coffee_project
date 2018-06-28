namespace :dev do

  task fetch_coffee: :environment do

    CoffeeDatum.destroy_all

    url = "https://cafenomad.tw/api/v1.2/cafes"
    response = RestClient.get(url)
    data = JSON.parse(response.body)
    num = data.length-1

    for i in 0..num

        address = data[i]["address"]
        if address.include?("\n")==true
            address = address.gsub(/\n/,"")
        end

        coffee_url = data[i]["url"]
        if coffee_url.include?("\n")==true
           coffee_url = coffee_url.gsub(/\n/,"")
        end

        open_time = data[i]["open_time"]
        if open_time.include?("\n")==true
            open_time = open_time.gsub(/\n/," ")
        end


        coffee = CoffeeDatum.create!(
            name: data[i]["name"],
            wifi: data[i]["wifi"],
            seat: data[i]["seat"],
            quiet: data[i]["quiet"],
            tasty: data[i]["tasty"],
            cheap: data[i]["cheap"],
            music: data[i]["music"],
            address: address,
            latitude: data[i]["latitude"],
            longitude: data[i]["longitude"],
            url: coffee_url,
            limited_time: data[i]["limited_time"],
            socket: data[i]["socket"],
            standing_desk: data[i]["standing_desk"],
            mrt: data[i]["mrt"],
            open_time: open_time
        )

    end

    puts "now you have #{CoffeeDatum.count} coffee shop data"
  end

end