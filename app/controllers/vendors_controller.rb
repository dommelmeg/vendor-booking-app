class VendorsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    vendors = Vendor.all
    render json: vendors
  end

  def create
    new_vendor = Vendor.create!(vendor_params)
    if new_vendor.valid?
      render json: new_vendor, status: :created
    else
      render json: { errors: new_vendor.errors.fullmessages }, status: :unprocessable_entity
    end
  end

  private

  def vendor_params
    params.permit(:name, :genre)
  end

  def render_not_found_response
    render json: { error: "Vendor not found" }, status: :not_found
  end

end
