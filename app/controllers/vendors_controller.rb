class VendorsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    vendors = Vendor.all
    render json: vendors
  end

  def create
    new_vendor = Vendor.create!(vendor_params)
    render json: new_vendor, status: :created
  end

  private

  def vendor_params
    params.permit(:name, :genre)
  end

  def render_not_found_response
    render json: { error: "Vendor not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
