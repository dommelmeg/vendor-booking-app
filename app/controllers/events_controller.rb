class EventsController < ApplicationController

  def index
    events = Event.all
    render json: events
  end

  def create
    new_event = Event.create(
      user_id: session[:user_id],
      band_id: params[:band_id],
      event_name: params[:event_name],
      date: params[:date],
      rating: params[:rating],
      review: params[:review],
      image_url: params[:image_url]
    )
    render json: new_event, status: :created
  end
  
end
