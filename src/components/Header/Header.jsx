import React from "react";
import cn from "./Header.module.css";

export const Header = () => {
  return (
    <header className={cn.header}>
      <a href="/">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._b3kZkD2haAGlajy5aYNUAHaEo%26pid%3DApi&f=1"
          alt="img"
        />
      </a>
    </header>
  );
};
