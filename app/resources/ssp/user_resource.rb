module Ssp
  class UserResource < ApplicationResource
    self.model = User

    attribute :id, :integer, writable: false
    attribute :email, :string
    attribute :prs, :integer
    attribute :total_points, :integer
    attribute :created_at, :datetime, writable: false

    has_many :forms
  end
end
