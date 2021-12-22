module Ssp
  class ReviewQuestionResource < ApplicationResource
    self.model = ReviewQuestion

    attribute :form_id, :integer_id, only: [:filterable]
    attribute :coding_for_coverage, :boolean, default: :false
    attribute :punctual_programmer, :boolean, default: :false
    attribute :sloc_gold, :boolean, default: :false
    attribute :sloc_silver, :boolean, default: :false
    attribute :sloc_bronze, :boolean, default: :false
    attribute :crikey, :boolean, default: :false
    attribute :law_abiding_citizen, :boolean, default: :false

    attribute :created_at, :datetime
    attribute :updated_at, :datetime

    belongs_to :form

  end
end
