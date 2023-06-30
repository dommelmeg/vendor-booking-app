class VendorsController < ApplicationController

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

end
