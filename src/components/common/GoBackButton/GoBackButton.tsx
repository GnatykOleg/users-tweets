import React, { FC } from "react";

import { useNavigate } from "react-router";

import { ROUTES } from "../../../conts/routes-const";

import sprite from "../../../assets/icons/sprite.svg";

import s from "./GoBackButton.module.css";

const GoBackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <button
      className={s.buttonBack}
      type="button"
      onClick={() => navigate(ROUTES.HOME)}
    >
      <svg className={s.logo} width={80} height={30}>
        <use href={`${sprite}#arrow-left`}></use>
      </svg>
    </button>
  );
};

export default GoBackButton;
