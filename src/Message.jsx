import React, { Component } from 'react';

class Message extends React.Component {
  render() {
    console.log("Rendering <Message/>");

    const information = this.props.information;
    if (information.type === "incomingMessage") {
      return (
        <main className="messages">
          <div className="message">
            <span className="message-username">{information.username}</span>
            <span className="message-content">{information.content}</span>
          </div>
        </main>
      );
    } else {
      return (
        <main className="messages">
          <div className="message">
            <span className="message-content">{information.content}</span>
          </div>
        </main>
      );
    }
  }
}

export default Message