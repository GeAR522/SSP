# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_22_121148) do

  create_table "forms", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "q1_total"
    t.integer "q2_total"
    t.integer "q3_total"
    t.integer "q4_total"
    t.integer "q5_total"
    t.integer "total_points"
    t.string "git_link"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_forms_on_user_id"
  end

  create_table "review_questions", force: :cascade do |t|
    t.integer "form_id", null: false
    t.boolean "coding_for_coverage"
    t.boolean "punctual_programmer"
    t.boolean "sloc_gold"
    t.boolean "sloc_silver"
    t.boolean "sloc_bronze"
    t.boolean "crikey"
    t.boolean "law_abiding_citizen"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["form_id"], name: "index_review_questions_on_form_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "prs"
    t.integer "total_points"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "forms", "users"
  add_foreign_key "review_questions", "forms"
end
