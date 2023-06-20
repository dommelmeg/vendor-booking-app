class EventsController < ApplicationController

  def index
    events = Event.all
    render json: events
  end

  def show
    event = Event.find_by(id: params[:id])
    render json: event
  end

  def update
    event = Event.find_by(id: params[:id])
    if event
      event.update(event_params)
      render json: event
    else
      render json: { error: 'Event not found' }, status: :not_found
    end
  end

  def destroy
    event = Event.find_by(id: params[:id])
    if event
      event.destroy
      # head :no_content
    else
      render json: { error: 'Event not found' }, status: :not_found
    end
  end

  def create
    new_event = Event.create!(
      user_id: session[:user_id],
      vendor_id: params[:vendor_id],
      event_name: params[:event_name],
      date: params[:date],
      image_url: params[:image_url]
    )
    if new_event.valid?
      render json: new_event, status: :created
    else
      render json: { errors: new_event.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def event_params
    params.permit(:vendor_id, :event_name, :date, :image_url)
  end
  
end
