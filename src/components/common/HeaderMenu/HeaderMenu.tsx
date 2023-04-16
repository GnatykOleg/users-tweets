import React, { FC } from "react";

import { NavLink } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import { headerMenuItems } from "./headerMenuItems";

import s from "./HeaderMenu.module.css";

const getLink = ({ isActive }: { isActive: boolean }) => {
  return isActive ? s.linkActive : s.link;
};

const HeaderMenu: FC = () => (
  <ul className={s.list}>
    {headerMenuItems.map(({ to, text }) => (
      <li key={nanoid()}>
        <NavLink to={to} className={getLink}>
          {text}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default HeaderMenu;
