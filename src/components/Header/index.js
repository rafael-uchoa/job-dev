import React from "react";
import "./styles.scss";
import ProgrammerImage from "../../images/programmer.png";

export default function Header() {
  return (
    <div className="Header">
      <h1>{"<JobDev />"}</h1>
      <img src={ProgrammerImage} alt="programmer" />
    </div>
  );
}
