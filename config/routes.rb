Rails.application.routes.draw do

  resources :forms
  devise_for :users


  root 'forms#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :ssp, defaults: { format: :jsonapi } do
    resources :forms
    resources :review_questions
  end
  #
  # draw :SSP
  #
  # root to: redirect("/forms")


end
