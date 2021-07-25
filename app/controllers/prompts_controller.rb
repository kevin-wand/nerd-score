class PromptsController < ApplicationController
  before_action :set_prompt, only: [:show, :update, :destroy]

  # GET /prompts
  def index
    @prompts = Prompt.all

    render json: @prompts
  end

  # GET /prompts/1
  def show
    render json: @prompt, include: :category, status: :ok
  end

  # POST /prompts
  def create
    @prompt = Prompt.new(prompt_params)
    @prompt.user = @current_user

    if @prompt.save
      render json: @prompt, status: :created
    else
      render json: @prompt.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /prompts/1
  def update
    if @prompt.update(prompt_params)
      render json: @prompt
    else
      render json: @prompt.errors, status: :unprocessable_entity
    end
  end

  # DELETE /prompts/1
  def destroy
    @prompt.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prompt
      @prompt = Prompt.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def prompt_params
      params.require(:prompt).permit(:question, :answer, :choice1, :choice2, :choice3)
    end
end

=begin

If a quiz is 10 questions, 3 ideas for setting up the prompts:
1. make 1 axios request, pull 10 questions to FE, randomize/sample from there
2. make 1 request, pull 10 questions on BE, randomize/sample then send to FE
3. pull 1 question at a time, (i think this is how david suggested to run the project)

=end