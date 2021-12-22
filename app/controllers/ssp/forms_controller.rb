module Ssp
  class FormsController < ApplicationController
  skip_forgery_protection
  def index
    # forms = FormResource.all(params)
    # respond_with(forms)

    render jsonapi: FormResource.all(params)
  end

  def show
    # form = FormResource.find(params)
    # respond_with(form)
    #
    # render jsonapi: @forms.find(params)
  end

  def create
    puts 'bellend'
    puts params

    create_params = params.to_unsafe_h
    create_params[:data][:attributes][:user_id] = current_user.id
    puts create_params
    form = FormResource.build(create_params)
    # puts create_params

    if form.save
      render jsonapi: form, status: 201
    else
      render jsonapi_errors: form
    end
    render '/forms'
  end

  def update
    form = FormResource.find(params)

    if form.update_attributes
      render jsonapi: form
    else
      render jsonapi_errors: form
    end
  end

  def destroy
    form = FormResource.find(params)

    if form.destroy
      render jsonapi: { meta: {} }, status: 200
    else
      render jsonapi_errors: form
    end
  end
  end
end
