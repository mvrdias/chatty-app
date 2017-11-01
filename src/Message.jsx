import React, { Component } from 'react';

class Message extends React.Component {
  render() {
    console.log("Rendering <Message/>");
    return (
      <main className="messages">
        <div className="message">
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      </main>
    );
  }
}

export default Message