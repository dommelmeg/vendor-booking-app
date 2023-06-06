class UsersController < ApplicationController
  # skip_before_action :authorized, only: :create

  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    current_user = User.find(session[:user_id])
    if current_user
      render json: current_user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:username, :password, :firstName, :lastName)
  end

end
