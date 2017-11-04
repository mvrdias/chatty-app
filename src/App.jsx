import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type:"",
      currentUser: {name: "Anonymous"},
      messages: [],
      userCounter: 0
    }
    // this.onNewMsg = this.onNewMsg.bind(this);
    this.sendMsg = this.sendMsg.bind(this);
    this.changeUseName = this.changeUseName.bind(this);
  }


  componentDidMount() {

    console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = (event) => {
      console.log("Connected to server");
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      switch(data.type) {
        case "incomingMessage":
          this.setState({messages: this.state.messages.concat(data)});
          break;
        case "incomingNotification":
          this.setState({messages: this.state.messages.concat(data)});
          break;
        case "counter":
          this.setState({userCounter: data.userCounter});
          break;
        default:
          throw new Error("Unknown event type " + data.type);
      }
    };
  }

  sendMsg(content) {
    const newMessage = {type:"postMessage",
                        username: this.state.currentUser.name,
                        content:content};
    this.socket.send(JSON.stringify(newMessage));
  }

  changeUseName(userName){
    var oldUserName = this.state.currentUser.name;
    this.setState({
      currentUser: {name:userName},
    })
    const newMessage = {type:"postNotification",
                        username: this.state.currentUser.name,
                        content: ` ${oldUserName} has changed their name to ${userName}`};
    this.socket.send(JSON.stringify(newMessage));
  }


  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <span className = "contador">Online users: {this.state.userCounter}</span>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar changeUseName={this.changeUseName} sendMsg={this.sendMsg} currentUser={this.state.currentUser}/>
      </div>

    );
  }
}
export default App;
