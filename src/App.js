import React, { Component } from 'react'
import Contents from "./components/Contents";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./css/styles.css";
import "./css/styles2.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
    }
  }
  Switch_page = (Switched_page) => {
    this.setState({ page: Switched_page });
  }
  render() {
    return (
      <div className="App">
        <Navbar Switch_page={this.Switch_page}/>
        <Sidebar Switch_page={this.Switch_page}/>
        <Contents Switched_page={this.state.page}/>
      </div>
    );
  }
}


export default App;
