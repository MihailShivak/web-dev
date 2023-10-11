import React from "react";
import Head from "./Head.js";
import Content from "./Content.js";

export default function About() {
  return (
    <div className="about-body">
      <div className="about-head">
        <Head />
      </div>
      <div className="about-content">
        <Content />
      </div>
    </div>
  );
}
