import React, { useEffect, useState } from "react";
import NavbarLg from "./NavbarLg.js";
import NavbarMd from "./NavbarMd.js";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakPoint = 1000;
  React.useEffect(() => {
    const handleResizeWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWidth);
    return () => {
      window.removeEventListener("resize", handleResizeWidth);
    };
  }, []);
  if (windowWidth > breakPoint) {
    return (
      <div>
        <NavbarLg />
      </div>
    );
  } else {
    return (
      <div>
        <NavbarMd />
      </div>
    );
  }
}
