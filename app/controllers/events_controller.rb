class EventsController < ApplicationController

  def index
    events = Event.all
    render json: events
  end

  def create
    new_event = Event.create(
      user_id: session[:user_id],
      # band_id: params[:band_id],
      event_name: params[:event_name],
      date: params[:date],
      # rating: params[:rating],
      # review: params[:review],
      image_url: params[:image_url]
    )
    if new_event.valid?
      render json: new_event, status: :created
    else
      render json: { errors: new_event.errors.full_messages}, status: :unprocessable_entity
    end
  end
  
end
