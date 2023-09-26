import React from "react";
import { MostPopularCards } from "./Cards";
import "../../../style/main/content.css";

export default function Content() {
  return (
    <div className="content-body">
      <div className="most-popular-module mx-1 row row-cols-1 row-cols-md-1">
        <div className="col py-1 px-2">
          <h3 className="most-popular-h3">TECHNOLOGIES</h3>
          <h4 className="most-popular-h4">Most popular articles</h4>
        </div>
        <MostPopularCards />
      </div>
    </div>
  );
}
