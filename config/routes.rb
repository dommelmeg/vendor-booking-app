Rails.application.routes.draw do
  
  resources :events
  resources :vendors

  post"/signup", to: "users#create"
  get "/me", to: "users#show"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/userevents", to: "events#user_index"

end
