require File.expand_path('../../config/environment',  __FILE__)

cities = ["keelung", "taipei", "new_taipei","hsinchu", "taichung", "tainan", "kaohsiung", "yilan","taoyuan", "miaoli", "changhua","nantou", "yunlin", "chiayi", "pingtung","taitung", "hualien", "penghu", "other"]

cities.each { |city| County.create(name: city) }

CoffeeDatum.all.each do |coffee_data|
  if coffee_data.address.include?("基隆")
    county = County.find_by(name: "keelung")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("台北") || coffee_data.address.include?("臺北") || coffee_data.address.include?("南港") || coffee_data.address.include?("Taipei") || coffee_data.address.include?("內湖") || coffee_data.address.include?("士林")
    county = County.find_by(name: "taipei")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("新北") || coffee_data.address.include?("永和") || coffee_data.address.include?("中和") || coffee_data.address.include?("板橋") || coffee_data.address.include?("新店")
    county = County.find_by(name: "new_taipei")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("桃園") || coffee_data.address.include?("中壢")
    county = County.find_by(name: "taoyuan")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("新竹")
    county = County.find_by(name: "hsinchu")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("苗栗")
    county = County.find_by(name: "miaoli")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("台中") || coffee_data.address.include?("臺中")
    county = County.find_by(name: "taichung")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("彰化")
    county = County.find_by(name: "changhua")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("雲林")
    county = County.find_by(name: "yunlin")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("嘉義")
    county = County.find_by(name: "chiayi")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("台南") || coffee_data.address.include?("臺南")
    county = County.find_by(name: "tainan")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("高雄") || coffee_data.address.include?("鳳山")
    county = County.find_by(name: "kaohsiung")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("屏東")
    county = County.find_by(name: "pingtung")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("台東") || coffee_data.address.include?("臺東")
    county = County.find_by(name: "taitung")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("花蓮")
    county = County.find_by(name: "hualien")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("宜蘭")
    county = County.find_by(name: "yilan")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("南投")
    county = County.find_by(name: "nantou")
    coffee_data.county = county
    coffee_data.save
    next
  end
  if coffee_data.address.include?("澎湖")
    county = County.find_by(name: "penghu")
    coffee_data.county = county
    coffee_data.save
    next
  end

  county = County.find_by(name: "other")
  coffee_data.county = county
  coffee_data.save

end