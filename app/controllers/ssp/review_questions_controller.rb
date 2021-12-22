module Ssp
  class ReviewQuestionsController < ApplicationController
    skip_forgery_protection
    def index
      review_questions = ReviewQuestionResource.all(params)
      respond_with(review_questions)

      render jsonapi: @review_questions.all(params)
    end

    def show
      # review_question = review_questionResource.find(params)
      # respond_with(review_question)
      #
      # render jsonapi: @review_questions.find(params)
    end

    def create
      puts 'FROM HERE'
      puts params
      form = Form.find

      create_params = params.to_unsafe_h
      create_params[:data][:attributes][:form_id] = form.id
      review_question = ReviewQuestionResource.build(create_params)

      if review_question.save
        render jsonapi: review_question, status: 201
      else
        render jsonapi_errors: review_question
      end
    end

    def update
      review_question = ReviewQuestionResource.find(params)

      if review_question.update_attributes
        render jsonapi: review_question
      else
        render jsonapi_errors: review_question
      end
    end

    def destroy
      review_question = ReviewQuestionResource.find(params)

      if review_question.destroy
        render jsonapi: { meta: {} }, status: 200
      else
        render jsonapi_errors: review_question
      end
    end
  end
end
