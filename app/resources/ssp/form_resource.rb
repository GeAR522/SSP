module Ssp
  class FormResource < ApplicationResource
    self.model = Form
    # self.polymorphic = ['ReviewQuestionResource']

    attribute :user_id, :integer_id
    attribute :q1_total, :integer, default: 0
    attribute :q2_total, :integer, default: 0
    attribute :q3_total, :integer, default: 0
    attribute :q4_total, :integer, default: 0
    attribute :q5_total, :integer, default: 0
    attribute :total_points, :integer, default: 0
    attribute :git_link, :string, default: ''
    attribute :created_at, :datetime, writable: false

    # belongs_to :user

    has_one :review_question, dependant: :destroy, resource: ReviewQuestionResource do
      params do |hash|
        hash[:sort] = '-created_at'
      end
    end

  end
end
