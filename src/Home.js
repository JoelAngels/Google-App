import React from "react";
import "./Home.css";
import { Link } from "react-router-dom"; //Links are just clever A tags
import { Avatar, IconButton } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="header__left">
          <Link
            to="/about"
            target="_blank"
            onClick={() => {
              window.open("https://about.google/");
            }}
          >
            About
          </Link>
          <Link
            to="/store"
            target="_blank"
            onClick={() => {
              window.open("https://store.google.com/");
            }}
          >
            Store
          </Link>
        </div>
        <div className="home__headerRight">
          <Link
            to="/gmail"
            onClick={() => {
              window.open("https://clone-77e58.web.app/");
            }}
          >
            Gmail
          </Link>
          <Link
            to="/images"
            onClick={() => {
              window.open("https://www.google.com/imghp?hl=xx-elmer");
            }}
          >
            Images
          </Link>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <Avatar />
          </IconButton>
        </div>
      </div>
      {/* //Everything underneath is the body */}
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
