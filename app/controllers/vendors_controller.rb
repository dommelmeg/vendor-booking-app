class VendorsController < ApplicationController

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

end
