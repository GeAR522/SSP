class FormResource < ApplicationResource
  attribute :q1_total, :integer
  attribute :q2_total, :integer
  attribute :q3_total, :integer
  attribute :q4_total, :integer
  attribute :q5_total, :integer
  attribute :total_points, :integer
  attribute :git_link, :string
  attribute :created_at, :datetime, writable: false
end
