import React, { FC } from "react";

import HeaderMenu from "../HeaderMenu/HeaderMenu";

import s from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={s.header}>
      <nav>
        <HeaderMenu />
      </nav>
    </header>
  );
};

export default Header;
