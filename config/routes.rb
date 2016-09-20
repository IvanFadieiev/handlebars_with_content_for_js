Rails.application.routes.draw do
  resources :users
  get 'user_list', to: "users#user_list"
end
