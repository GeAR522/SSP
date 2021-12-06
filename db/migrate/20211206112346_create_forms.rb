class CreateForms < ActiveRecord::Migration[6.0]
  def change
    create_table :forms do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :q1_total
      t.integer :q2_total
      t.integer :q3_total
      t.integer :q4_total
      t.integer :q5_total
      t.integer :total_points
      t.string :git_link

      t.timestamps
    end
  end
end
