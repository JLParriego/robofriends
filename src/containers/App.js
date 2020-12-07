import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "../containers/App.css";

/* 

**class App extends Component**
- Create class App inherited from Component
- Create the constructor for the State
- Call super() to inherit constructor from Component
- Add to the state an empty array: robots
- Add to the state an empty string: searchfield
-- this points to App

** componentDidMount**
- Fetch an array of data from an API
- Transform into a json
- Add this array to robots array inside the state

**OnSearchChange**
- This fx capture user input collected by event and add to searchfield into the state
- Pass OnSearchChange method as a property into the SearchBox Component as searchChange attribute
- filteredRobots take robots array and filter it with the searchfield content

**Render**
- Create filteredRobots array filtering the elements of robots array with the searchfield string
- If we have problems loading data from API, show loading in the screen
- Pass to SearchBox Component onSearchChange method as a property
- Pass to CardList Component filteredRobots array as a property
- Render the Cardlist Component inside of a Scroll Component
- Handle errors in Cardlist with ErrorBoundry Component



State = memory in our app,
State = object that describes our application
State says the things that can change
Props are things that came from the State

*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
