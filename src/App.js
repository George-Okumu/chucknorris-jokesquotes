import React, { useState } from "react";
import chuck from './chuck.jpeg';
import './App.css';
import JokesForm from './JokesForm';
import JokesCard from './JokesCard';

function App() {
  const favouriteLocalStore =
  JSON.parse(localStorage.getItem("favourite")) || [];
const isDesktopWidth = window.innerWidth >= 1200 ? true : false;
const [state, setState] = useState({
  jokeData: {},
  isOpenFavourite: isDesktopWidth,
  favouriteData: { result: favouriteLocalStore },
});

  function getData(data) {
    this.setState({ ...this.state, jokeData: data });
  }

  return (
    <div className="App-header">
      <img src={chuck} alt="chuck picture"/>
      <p>
      Find all Chuck Norris quotes here.
      </p>
      <div className="container-fluid">
      <JokesForm getData={getData} />
      </div>
      {/* <JokesCard /> */}

    </div>
  );
}

export default App;

