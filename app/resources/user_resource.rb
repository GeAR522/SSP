class UserResource < ApplicationResource
  self.adapter = Graphiti::Adapters::ActiveRecord

  attribute :email, :string
  attribute :prs, :integer
  attribute :total_points, :integer
end

UserResource.all.data
