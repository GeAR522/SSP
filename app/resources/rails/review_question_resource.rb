class ReviewQuestionResource < ApplicationResource
  self.adapter = Graphiti::Adapters::ActiveRecord

  attribute :form_id, :integer
  attribute :coding_for_coverage, :boolean
  attribute :punctual_programmer, :boolean
  attribute :sloc_gold, :boolean
  attribute :sloc_silver, :boolean
  attribute :sloc_bronze, :boolean
  attribute :crikey, :boolean
  attribute :law_abiding_citizen, :boolean
  attribute :created_at, :datetime, writable: false
  attribute :updated_at, :datetime, writable: false
end

UserResource.all.data
