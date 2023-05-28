import React from "react";
import { Link } from "react-router-dom";
interface Props {
  className: string;
}
export const Header = (props: Props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div style={{ display: "flex", gap: 8 }}>
        <Link to="/home">home</Link>
        <Link to="/home/washroom">washroom</Link>

        <Link to="/about">about</Link>
        <Link to="/about/resume">resume</Link>
      </div>
    </div>
  );
};
