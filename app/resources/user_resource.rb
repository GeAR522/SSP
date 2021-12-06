class UserResource < ApplicationResource
  attribute :email, :string
  attribute :prs, :integer
  attribute :total_points, :integer
end
