class Form < ApplicationRecord
  belongs_to :user
  has_one :review_question, dependent: :destroy

end
