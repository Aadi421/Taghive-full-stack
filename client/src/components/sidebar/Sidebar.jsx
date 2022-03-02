import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import myImage from "../../img/adarsh.jpg"


export default function Sidebar() {
  const [cats, setCats] = useState([]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={myImage}
          alt=""
          className="infoImage"
        />
        <p className="aboutInfo">
        I’m Adarsh Chaudhary, a solo traveler, a travel blogger, from India with over 1 years of travel experiences, ready to share them with you.Here I going to show and share the information about the best
        travelling place in the india.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
