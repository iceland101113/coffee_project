# 咖啡廳定位搜尋

主要功能
- 預設位置：顯示全台所有咖啡廳位置。 
- 咖啡廳點位資訊：點選咖啡廳會跳出咖啡廳資訊，包含店名、地址、營業時間及相關連結。 
- 使用者定位：定位至使用者位置。
- 鄰近咖啡廳搜尋：可查詢離使用者位置步行5、10、15、20分鐘的咖啡廳，地圖上會顯示出到達所花時間。
- 最佳路徑：顯示查詢到的某間咖啡廳從使用者位置步行過去的最佳路徑。

如何執行
- 使用 git clone 把專案載到本機
- 執行 bundle install
- 執行 rails db:migrate
- 執行 rails dev:fetch_coffee 把咖啡廳資料抄到資料庫中
- 加入google map service的API key
  1. 至google map platform申請，申請時會被要求在google cloud platform開一個專案，然後選用那個專案申請，申請API key網址如下
     https://developers.google.com/maps/documentation/geocoding/get-api-key?hl=zh-tw
  2. 申請到API key之後，要將API key貼入程式碼中
     打開/app/views/layouts/application.html.erb
     
