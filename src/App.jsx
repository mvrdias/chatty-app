import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: []
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
      console.log(event);
      const data = JSON.parse(event.data);
      this.setState({messages: this.state.messages.concat(data)});
    };
  }

  sendMsg(content) {
    const newMessage = {username: this.state.currentUser.name, content:content};
    this.socket.send(JSON.stringify(newMessage));
  }

  changeUseName(userName){
    this.setState({
      currentUser: {name:userName}
    })
  }


  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar changeUseName={this.changeUseName} sendMsg={this.sendMsg} currentUser={this.state.currentUser}/>
      </div>

    );
  }
}
export default App;
