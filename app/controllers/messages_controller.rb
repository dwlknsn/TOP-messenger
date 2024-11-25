class MessagesController < ApplicationController
  def create
    @message = current_user.messages.build(message_params)

    if @message.save
      ActionCable.server.broadcast("message", @message.as_json(include: :user))
    else
      render json: { error: "Failed to send message" }, status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
