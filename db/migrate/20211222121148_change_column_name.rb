class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :review_questions, :forms_id, :form_id
  end
end
