class CreateReviewQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :review_questions do |t|
      t.references :forms, null: false, foreign_key: true
      t.boolean :coding_for_coverage
      t.boolean :punctual_programmer
      t.boolean :sloc_gold
      t.boolean :sloc_silver
      t.boolean :sloc_bronze
      t.boolean :crikey
      t.boolean :law_abiding_citizen

      t.timestamps
    end
  end
end
