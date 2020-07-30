Rails.application.routes.draw do
  resources :comments
  resources :destinations
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    namespace :v1 do 
      resources :destinations 
      resources :features
    end
  end
end
