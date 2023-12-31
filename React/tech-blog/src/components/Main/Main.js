import React from "react";
import Head from "./Head.js";
import Content from "./Content.js";

export default function Main() {
  return (
    <div className="main-body">
      <div className="main-head">
        <Head />
      </div>
      <div className="main-content">
        <Content />
      </div>
    </div>
  );
}
