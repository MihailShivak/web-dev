import React from "react";
import { aboutData } from "./data";
import { getImage } from "./getImage";
import "../../style/about/content.css";
import cicolas_nage from "../../res/Cicolas_Nage.jpg";

export default function Content() {
  const aboutCard = aboutData.map((file) => (
    <div className="about-card row row-cols-1 row-cols-md-1 m-3" key={file.id}>
      <div className="about-imge-container col p-3">
        <img src={cicolas_nage} alt="" className="about-image"></img>
      </div>
      <div className="about-person-name col py-3">{file.name}</div>
      <div className="about-person-description col py-2">
        {file.description}
      </div>
    </div>
  ));
  return <div className="content-body mx-2">{aboutCard}</div>;
}
