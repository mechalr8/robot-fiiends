import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
const App = () => {
  const [inputText, setInputText] = React.useState("");

  const onSearchChange = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  return (
    <div className='tc'>
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} inputValue={inputText} />
      </div>
      <Scroll>
        <CardList input={inputText} />
      </Scroll>
    </div>
  );
};

export default App;
