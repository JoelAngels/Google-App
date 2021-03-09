import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Search({ hideButtons = false }) {
  // Checking and tracking the search input when typed
  const [input, setInput] = useState("");
  //   The history provides us with the browser history
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log("Hi there, you hit the search button ", input);
    //when you hit the search button, push this page into your history of search and redirects it there
    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {/* if hideButton props is not passed use the normal layout */}
      {!hideButtons ? (
        <>
          <div className="search__buttons">
            <Button type="submit" onClick={search} variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky </Button>
          </div>
          <div className="search__language">
            <p>
              Google offered in: <span className="text-color"> English</span>
            </p>
          </div>
        </>
      ) : (
        //otherwise hide the buttons
        <>
          <div className="search__buttons">
            <Button
              className="search__buttonsHidden"
              type="submit"
              onClick={search}
              variant="outlined"
            >
              Google Search
            </Button>
            <Button className="search__buttonsHidden" variant="outlined">
              I'm Feeling Lucky{" "}
            </Button>
          </div>
          <div className="search__language">
            <p>
              Google offered in: <span className="text-color"> English</span>
            </p>
          </div>
        </>
      )}
    </form>
  );
}

export default Search;
