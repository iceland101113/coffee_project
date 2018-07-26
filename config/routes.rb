Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :coffees
  root "coffees#index"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :coffees, only: [:index, :create, :show, :update, :destroy]
    end
  end
end
