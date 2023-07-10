class UsersController < ApplicationController
  skip_before_action :authorized, only: :create
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
    if current_user
      render json: current_user
    else
      render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      session.delete :user_id
    end
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
