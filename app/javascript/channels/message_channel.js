import consumer from "channels/consumer"

const messageChannel = consumer.subscriptions.create("MessageChannel", {
  connected() {
    console.log('connected');
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    console.log('disconnected');
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log('data received');

    const messageDisplay = document.querySelector('#message-display');
    messageDisplay.insertAdjacentHTML('beforeend', this.template(data));
  },

  template(data) {
    return `<article class="message">
              <div class="message-header">
                <p>${data.user.email}</p>
              </div>
              <div class="message-body">
                <p>${data.body}</p>
              </div>
            </article>`
  }
});
