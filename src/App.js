import "./App.css";
import ReactDOM from "react-dom";
import image from "./cal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";
import {
  faArrowRight,
  faCoffee,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FoodCard } from "./components/card";
import db from "./DB";
import { FestBanner } from "./components/banner";
import dimg from "./DB/assets/paper.png";
import mimg from "./DB/assets/Vec.png";
import lin from "./DB/assets/lin.png";
import ar from "./DB/assets/al.png";
import al from "./DB/assets/ar.png";

function App() {
  const { weeklySpecial, Topseller, Featured, fest } = db;
  const [scrollLeft1, setScrollLeft1] = useState(0);
  const scrollRef1 = useRef(null);

  const [scrollLeft2, setScrollLeft2] = useState(0);
  const scrollRef2 = useRef(null);

  const [scrollLeft3, setScrollLeft3] = useState(0);
  const scrollRef3 = useRef(null);

  const handleScrollLeft1 = () => {
    scrollRef1.current.scrollLeft -= 150;
    setScrollLeft1(scrollRef1.current.scrollLeft);
  };

  const handleScrollRight1 = () => {
    scrollRef1.current.scrollLeft += 150;
    setScrollLeft1(scrollRef1.current.scrollLeft);
  };

  const handleScrollLeft2 = () => {
    scrollRef2.current.scrollLeft -= 150;
    setScrollLeft2(scrollRef2.current.scrollLeft);
  };

  const handleScrollRight2 = () => {
    scrollRef2.current.scrollLeft += 150;
    setScrollLeft2(scrollRef2.current.scrollLeft);
  };

  const handleScrollLeft3 = () => {
    scrollRef3.current.scrollLeft -= 150;
    setScrollLeft3(scrollRef3.current.scrollLeft);
  };

  const handleScrollRight3 = () => {
    scrollRef3.current.scrollLeft += 150;
    setScrollLeft3(scrollRef3.current.scrollLeft);
  };

  return (
    <div className="App">
      <div className="weekly">
        <div className="header">
          <div className="wtext">
            <p>Weekly Special</p>
            <img className="line" src={lin} alt="Line"></img>
          </div>
          <div className="vtext">
            <p>View All </p>
            <FontAwesomeIcon
              className="ico"
              icon={faArrowRight}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="cardbox">
          <img
            className="al"
            src={al}
            onClick={handleScrollLeft1}
            alt="Arrow Left"
          />
          <div className="weeklyitems" ref={scrollRef1}>
            {Featured.map((datum) => {
              return <FoodCard datum={datum} />;
            })}
          </div>
          <img
            className="ar"
            src={ar}
            onClick={handleScrollRight1}
            alt="Arrow Right"
          />
        </div>
      </div>

      {/* //top */}

      <div className="top">
        <div className="wtext">
          <p>Top seller</p>
          <img className="line" src={lin}></img>
        </div>

        <div className="vtext">
          <p>view all </p>

          <FontAwesomeIcon
            className="ico"
            icon={faArrowRight}
          ></FontAwesomeIcon>
        </div>

        <div className="cardbox">
          <img
            className="al"
            src={al}
            onClick={handleScrollLeft3}
            alt="Arrow Left"
          />
          <div className="weeklyitems" ref={scrollRef3}>
            {Topseller.map((datum) => {
              return <FoodCard datum={datum} />;
            })}
          </div>
          <img
            className="ar"
            src={ar}
            onClick={handleScrollRight3}
            alt="Arrow Right"
          />
        </div>
      </div>

      <div className="fea">
        <div className="wtext">
          <p>Featured Products</p>
          <img className="line" src={lin}></img>
        </div>

        <div className="vtext">
          <p>view all </p>

          <FontAwesomeIcon
            className="ico"
            icon={faArrowRight}
          ></FontAwesomeIcon>
        </div>

        <div className="cardbox">
          <img
            className="al"
            src={al}
            onClick={handleScrollLeft2}
            alt="Arrow Left"
          />
          <div className="weeklyitems" ref={scrollRef2}>
            {weeklySpecial.map((datum) => {
              return <FoodCard datum={datum} />;
            })}
          </div>
          <img
            className="ar"
            src={ar}
            onClick={handleScrollRight2}
            alt="Arrow Right"
          />
        </div>
      </div>

      {/* 
  //fest */}

      <div className="fest">
        <div className="wtext">
          <p>Festival Offers</p>
          <img className="line" src={lin}></img>
        </div>

        {fest.map((datum) => {
          return <FestBanner datum={datum} />;
        })}
      </div>

      <div className="down">
        <div>
          <img className="dimge" src={dimg}></img>
        </div>

        <p className="Sub">Subscribe to our newsletter</p>

        <p
          className="su
      "
        >
          No spam, promise! You will receive weekly news about the best deals
          and basket suggestions.
        </p>

        <input className="in"></input>

        <p
          className="em
      "
        >
          Email
        </p>

        <div>
          <img className="vimge" src={mimg}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
