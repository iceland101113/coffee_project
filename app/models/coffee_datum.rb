class CoffeeDatum < ApplicationRecord

  def lat_dist_1(pos)
    if pos + 0.03 > self.latitude.to_f && pos - 0.03 < self.latitude.to_f
      return true
    else
      return false
    end
  end

  def lon_dist_1(pos)
    if pos + 0.03 > self.longitude.to_f && pos - 0.03 < self.longitude.to_f
      return true
    else
      return false
    end
  end

end
