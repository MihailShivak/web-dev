import React from "react";
import "../../../style/main/mainhead.css";
import readMore from "../../../res/play.png";

export default function Head() {
  return (
    <div className="head-body">
      <div className="tech-blog-container">
        <h3 className="tech-blog-h3">Tech Blog</h3>
        <p className="tech-blog-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
          molestias!
        </p>
      </div>
      <a className="read-more-link p-3" href="">
        Read more
        <img
          className="read-more-img"
          src={readMore}
          alt="read more button"
          width={20}
        ></img>
      </a>
    </div>
  );
}
