import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import PirateList from "./Components/PirateList";
import Slider from "./Components/Slider";

class App extends Component {
  state = {
    pirates: [],
  };

  componentDidMount = () => {
    this.fetchPirets();
  };

  fetchPirets = () => {
    axios
      .get("https://my-json-server.typicode.com/bhubr/pirates-api/pirates")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          pirates: data,
        });
      });
  };

  render() {
    const { pirates } = this.state;
    return (
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route path="/Pirates">
            <PirateList pirates={pirates} />
          </Route>
          <Route>
            <Slider path="/" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
