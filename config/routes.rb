Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

  resources :coffees
  root "coffees#index"

  get 'get_excel', to: 'coffees#get_excel'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :coffees, only: [:index, :show]
    end
  end
end
