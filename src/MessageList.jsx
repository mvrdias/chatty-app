import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {


  render() {
    console.log("Rendering <MessageList/>");
    return (
      <div>
        {this.props.messages.map((message) => {
          return <Message information = {message}/>
        })}
      </div>
  );
  }
}

export default MessageList