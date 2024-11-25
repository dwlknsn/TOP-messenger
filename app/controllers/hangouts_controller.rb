class HangoutsController < ApplicationController
  def index
    @messages = Message.includes(:user).all
    @message = Message.new
  end
end
