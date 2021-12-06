class EditUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :prs, :integer
    add_column :users, :total_points, :integer
  end
end
