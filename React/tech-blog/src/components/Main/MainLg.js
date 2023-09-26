import React from "react";
import Head from "./main-components/Head.js";
import Content from "./main-components/Content.js";

export default function MainLg() {
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
