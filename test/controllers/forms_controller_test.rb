require 'test_helper'

class FormsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @form = forms(:one)
  end

  test "should get index" do
    get forms_url
    assert_response :success
  end

  test "should get new" do
    get new_form_url
    assert_response :success
  end

  test "should create form" do
    assert_difference('Form.count') do
      post forms_url, params: { form: { git_link: @form.git_link, q1_total: @form.q1_total, q2_total: @form.q2_total, q3_total: @form.q3_total, q4_total: @form.q4_total, q5_total: @form.q5_total, total_points: @form.total_points, user_id: @form.user_id } }
    end

    assert_redirected_to form_url(Form.last)
  end

  test "should show form" do
    get form_url(@form)
    assert_response :success
  end

  test "should get edit" do
    get edit_form_url(@form)
    assert_response :success
  end

  test "should update form" do
    patch form_url(@form), params: { form: { git_link: @form.git_link, q1_total: @form.q1_total, q2_total: @form.q2_total, q3_total: @form.q3_total, q4_total: @form.q4_total, q5_total: @form.q5_total, total_points: @form.total_points, user_id: @form.user_id } }
    assert_redirected_to form_url(@form)
  end

  test "should destroy form" do
    assert_difference('Form.count', -1) do
      delete form_url(@form)
    end

    assert_redirected_to forms_url
  end
end
