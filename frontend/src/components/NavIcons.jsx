import React from "react";

import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import Home from '../assets/Home.jsx';
import Comment from '../assets/Comment.jsx';
import Noti from '../assets/Noti';
import "./NavIcons.css";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="/">
        <Home />
      </Link>
      <UilSetting />
      <Noti />
      <Link to="/chat">
        <Comment />
      </Link>
    </div>
  );
};

export default NavIcons;