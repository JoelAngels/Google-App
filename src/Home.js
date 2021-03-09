import React from "react";
import "./Home.css";
import { Link } from "react-router-dom"; //Links are just clever A tags
import { Avatar, IconButton } from "@material-ui/core"; //remember to put the IconButton here
import AppsIcon from "@material-ui/icons/Apps";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
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
      </div>
    </div>
  );
}

export default Home;