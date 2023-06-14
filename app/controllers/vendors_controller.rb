class VendorsController < ApplicationController

  def index
    vendors = Vendor.all
    render json: vendors, include: :events
  end

end
