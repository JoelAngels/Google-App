import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";

function SearchPage() {
  //https://developers.google.com/custom-search/v1/using_rest

  const [{ term }, dispatch] = useStateValue();

  //LIVE API CALL
  const { data } = useGoogleSearch(term);
  //const data = response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>

        <div className="searchPage__headerBody ">
          <Search hideButtons textHidden />

          <div className="searchPage__options">
            <div className="searchPage__right"></div>
            <div className="searchPage__left"></div>
          </div>
        </div>
      </div>
      <div className="searchPage__results "></div>
    </div>
  );
}

export default SearchPage;
