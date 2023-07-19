class EventsController < ApplicationController

  def index
    events = Event.all
    render json: events
  end

  def user_index
    user_events = Event.where(user_id: session[:user_id])
    render json: user_events.order('date')
  end

  def show
    event = Event.find_by(id: params[:id])
    render json: event
  end

  def update
    user_events = Event.where(user_id: session[:user_id])
    event = user_events.find_by(id: params[:id])
    event.update!(event_params)
    render json: event
  end

  def destroy
    event = Event.find_by(id: params[:id])
    event.destroy
    head :no_content
  end

  def create
    new_event = Event.create!(
      user_id: session[:user_id],
      vendor_id: params[:vendor_id],
      event_name: params[:event_name],
      date: params[:date],
      image_url: params[:image_url]
    )
    render json: new_event, status: :created
  end

  private

  def event_params
    params.permit(:vendor_id, :event_name, :date, :image_url, :review, :rating)
  end

end
