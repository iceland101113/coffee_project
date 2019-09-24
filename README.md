# find coffee shop near you website

## Intruduction
 * All user can:
  - see all coffee shop distribution in Taiwan
  - see all coffee shop detail infomation(name, address, website...)
  - navigate to their current location
  - searching all the coffee shop nearby(the distance need to walk 5, 10, 15 minutes)
  - the optimize route to the coffee shop
  - filtering the coffee shop we want to search(wifi condition, the seat is comfortable or not)
  
## Version
  Ruby
  Rails
  Google Map API

## Getting Started
  * set up
    - `bundle install`
    - `rails db:migrate`
  * get coffee data
    - `rails dev:fetch_coffee`
  * add google map service API key
    - apply a google map service API key on google map platform，the website can find below:
      https://developers.google.com/maps/documentation/geocoding/get-api-key?hl=zh-tw
    - attach the API key to /app/views/layouts/application.html.erb
      ![image](https://github.com/iceland101113/coffee_project/blob/master/Put_API_Key.png
     
