
import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:props.currentUser.name,
      message:''
    }
  this.onContent = this.onContent.bind(this);
  this.keyPress =  this.keyPress.bind(this);
  this.keyPressName =  this.keyPressName.bind(this);
  this.onContentName =  this.onContentName.bind(this);
  }


  onContent(event) {
    this.setState({
      message: event.target.value
    });
  }

  onContentName(event) {
    this.setState({
      userName: event.target.value
    });
  }

  keyPressName(e){
    if(e.keyCode == 13){
    this.props.changeUseName(this.state.userName);
    }
  }

  keyPress(e){
    if(e.keyCode == 13){
       this.props.sendMsg(this.state.message);
       this.setState({message: ''});
    }
  }


  render() {
    console.log("Rendering <ChatBar/>");
    return (

      <footer className="chatbar">
        <input className="chatbar-username" onKeyDown={this.keyPressName}
               onChange={this.onContentName} value={this.state.userName}/>

        <input className="chatbar-message" onKeyDown={this.keyPress}
               onChange={this.onContent} value={this.state.message}/>
      </footer>
    );
  }
}

export default ChatBar

