Rails.application.routes.draw do
  
  resources :events
  resources :vendors, only: [:index, :create]
  resources :users, only: [:index, :show, :create]

  post"/signup", to: "users#create"
  get "/me", to: "users#show"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/userevents", to: "events#user_index"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
