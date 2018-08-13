Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  #resources :users
  #resources :categories
  #resources :movies
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'v1' do
      resources :movies
      get 'users/current' => 'users#current'
      post 'user_token' => 'user_token#create'
    end
  end
end
