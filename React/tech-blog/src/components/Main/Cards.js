import React from "react";
import { mostPopularPosts, regularPosts } from "./data";
import { getImage } from "./getImage";
import mostPopularCardReadMoreIcon from "../../res/play(2).png";
import "../../style/main/cards.css";

export function MostPopularCards() {
  const popularPosts = mostPopularPosts.map((post) => (
    <div className="most-popular-card col card py-1 px-2" key={post.id}>
      <img
        className="most-popular-card-image card-img"
        src={getImage(post)}
        alt={post.imageDescription}
      ></img>
      <div className="most-popular-card-text card-img-overlay my-1 mx-2">
        <h5 className="most-popular-card-title card-title">{post.title}</h5>
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

export function RegularPosts() {
  const posts = regularPosts.map((post) => (
    <div className="regular-post-card col">
      <div className="row row-cols-1 row-cols-md-2">
        <a className="regular-post-card-image-link col p-3">
          <img
            className="regular-post-card-image"
            src={getImage(post)}
            alt={post.imageDescription}
          ></img>
        </a>
        <div className="regular-post-card-text col py-2 px-1">
          <h3 className="regular-post-card-h3">{post.title}</h3>
          <p className="regular-post-card-p">{post.description}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="col">
      <div className="row row-cols-1 row-cols-md-1">{posts}</div>
    </div>
  );
}
