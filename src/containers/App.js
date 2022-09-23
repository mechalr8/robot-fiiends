import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
const App = () => {
  const [inputText, setInputText] = useState("");
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const onSearchChange = (e) => {
    setInputText(e.target.value);
  };

  const searchedRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(inputText.toLowerCase());
  });

  return (
    <div className='tc'>
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} inputValue={inputText} />
      </div>
      <Scroll>
        <CardList robots={searchedRobots} />
      </Scroll>
    </div>
  );
};

export default App;
