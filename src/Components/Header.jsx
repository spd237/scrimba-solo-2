import React from "react";
import logo from "../assets/Fill-213.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <h3>my travel journal.</h3>
    </header>
  );
}
