require "application_system_test_case"

class FormsTest < ApplicationSystemTestCase
  setup do
    @form = forms(:one)
  end

  test "visiting the index" do
    visit forms_url
    assert_selector "h1", text: "Forms"
  end

  test "creating a Form" do
    visit forms_url
    click_on "New Form"

    fill_in "Git link", with: @form.git_link
    fill_in "Q1 total", with: @form.q1_total
    fill_in "Q2 total", with: @form.q2_total
    fill_in "Q3 total", with: @form.q3_total
    fill_in "Q4 total", with: @form.q4_total
    fill_in "Q5 total", with: @form.q5_total
    fill_in "Total points", with: @form.total_points
    fill_in "User", with: @form.user_id
    click_on "Create Form"

    assert_text "Form was successfully created"
    click_on "Back"
  end

  test "updating a Form" do
    visit forms_url
    click_on "Edit", match: :first

    fill_in "Git link", with: @form.git_link
    fill_in "Q1 total", with: @form.q1_total
    fill_in "Q2 total", with: @form.q2_total
    fill_in "Q3 total", with: @form.q3_total
    fill_in "Q4 total", with: @form.q4_total
    fill_in "Q5 total", with: @form.q5_total
    fill_in "Total points", with: @form.total_points
    fill_in "User", with: @form.user_id
    click_on "Update Form"

    assert_text "Form was successfully updated"
    click_on "Back"
  end

  test "destroying a Form" do
    visit forms_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Form was successfully destroyed"
  end
end
