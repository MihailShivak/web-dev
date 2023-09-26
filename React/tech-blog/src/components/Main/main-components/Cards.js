import React from "react";
import { mostPopularPosts } from "./data";
import { getImage } from "./getImage";
import mostPopularCardReadMoreIcon from "../../../res/play(2).png";
import "../../../style/main/cards.css";

export function MostPopularCards() {
  const popularPosts = mostPopularPosts.map((post) => (
    <div className="most-popular-card col card py-1 px-2" key={post.id}>
      <img
        className="most-popular-card-image card-img"
        src={getImage(post)}
        alt={post.title}
      ></img>
      <div className="most-popular-card-text card-img-overlay my-1 mx-2">
        <h5 className="most-popular-card-title card-title">Card title</h5>
        <a className="most-popular-card-read-more-link p-2">
          Read more
          <img
            src={mostPopularCardReadMoreIcon}
            width={15}
            alt=""
            className="most-popular-card-read-more-icon"
          ></img>
        </a>
      </div>
    </div>
  ));
  return (
    <div className="most-popular-cards-container col py-2 px-2">
      <div className="most-popular-cards row row-cols-1 row-cols-md-2">
        {popularPosts}
      </div>
    </div>
  );
}
