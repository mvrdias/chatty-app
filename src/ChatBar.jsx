
import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:''
    }
  this.onContent = this.onContent.bind(this);
  this.keyPress =  this.keyPress.bind(this);
  }


  onContent(event) {
    this.setState({
      message: event.target.value
    });
  }

  keyPress(e){
    if(e.keyCode == 13){
       this.props.onNewMessage(this.state.message);
    }
  }


  render() {
    console.log("Rendering <ChatBar/>");
    return (

      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" onKeyDown={this.keyPress} onChange={this.onContent} value={this.state.message} />
      </footer>
    );
  }
}

export default ChatBar

