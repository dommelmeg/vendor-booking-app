class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  #signup
  def create
    user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
  end

  #me
  def show
    current_user = User.find(session[:user_id])
    render json: current_user
  end

  def index
    users = User.all
    render json: users
  end

  private

  def user_params
    params.permit(:username, :password)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
