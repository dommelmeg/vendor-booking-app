class UsersController < ApplicationController
  skip_before_action :authorized, only: :create

  #signup
  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
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

end
