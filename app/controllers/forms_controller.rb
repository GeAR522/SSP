
class FormsController < ApplicationController
  # before_action :set_response!, only: %i[ show edit update destroy ]
  before_action :authenticate_user!, except: [:index, :show]


  # GET /forms or /forms.json
  def index

    # respond_to do |format|
    #   format.html { render :index }
    #   # format.json do
    #   #   @forms = Form.all
    #   #   render json: forms
    #   # end
    # end
    #
    #

    @forms = Form.all
    @review_question = ReviewQuestion.all

    # render jsonapi: forms
    #
    # respond_to do |format|
    #   format.json { render(json: forms) }
    #   format.jsonapi { render(jsonapi: forms) }
    #   format.xml { render(xml: forms) }
    # end
  end

  # GET /forms/1 or /forms/1.json
  def show

    # render 'forms/:id'

    # forms = FormsController.all(params)
    # render jsonapi: forms
    # respond_to do |format|
    #   format.html {render('forms/:id')}
    #   format.json { render(json: forms) }
    #   format.jsonapi { render(jsonapi: forms) }
    #   format.xml { render(xml: forms) }
    # end

    @form = Form.find(params['id'])

  end

  # GET /forms/new
  def new
    @form = Form.new
    @review_question = ReviewQuestion.new

    # forms = FormsController.all(params)
    # render jsonapi: forms
    # respond_to do |format|
    #   format.json { render(json: forms) }
    #   format.jsonapi { render(jsonapi: forms) }
    #   format.xml { render(xml: forms) }
  end

  # GET /forms/1/edit
  def edit
    @form = Form.find(params['id'])
  end

  # POST /forms or /forms.json
  def create
    @form = Form.new

    respond_to do |format|
      if @form.save!
        format.html { redirect_to @form, notice: "Form was successfully created." }
        format.json { render :show, status: :created, location: @form }
        # format.jsonapi { render :show, status: :created, location: @review_question}
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @form.errors, status: :unprocessable_entity }
      end
      # if @review_question.save!
      #   format.html { redirect_to '/forms', notice: "RQ was successfully created." }
      #   format.json { render :show, status: :created, location: @review_question }
      #   # format.jsonapi { render :show, status: :created, location: @review_question}
      # else
      #   format.html { render :new, status: :unprocessable_entity }
      #   format.json { render json: @review_question.errors, status: :unprocessable_entity }
      # end
    end
  end

  # PATCH/PUT /forms/1 or /forms/1.json
  def update
    @form = Form.find(params['id'])



    # respond_to do |format|
    #   if @form.update(form_params)
    #     format.html { redirect_to @form, notice: "Form was successfully updated." }
    #     format.json { render :show, status: :ok, location: @form }
    #   else
    #     format.html { render :edit, status: :unprocessable_entity }
    #     format.json { render json: @form.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # DELETE /forms/1 or /forms/1.json
  def destroy
    @form = Form.find(params['id'])
    num = params['id']
    @form.destroy
    redirect_to '/forms'

    # respond_to do |format|
    #   format.html { redirect_to forms_url, notice: "Form was successfully destroyed." }
    #   format.json { head :no_content }
    # end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_form
      @form = Form.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def form_params
      params.require(:form).permit(:user_id, :q1_total, :q2_total, :q3_total, :q4_total, :q5_total, :total_points, :git_link)
    end

    private
    #
    # def all
    #   connection = SQLite3::Database.new 'db/development.sqlite3'
    #   connection.results_as_hash = true
    #   connection.execute("SELECT * FROM forms")
    # end

end

