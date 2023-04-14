import React, { FC, useState } from "react";

import { PrimaryButton } from "../../index";

import messagesIcons from "../../../assets/images/messages-icons.png";

import sprite from "../../../assets/icons/sprite.svg";

import s from "./Card.module.css";

const Card: FC = () => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  const onClick = () => {
    setIsFollowing((state) => !state);

    // Добавляем +1 к фоллеверам
  };

  const buttonText = isFollowing ? "Following" : "Follow";

  const buttonBackgroung = { background: isFollowing ? "#5CD3A8" : "#EBD8FF" };

  return (
    <ul>
      <li className={s.item}>
        <svg className={s.logo} width={76} height={22}>
          <use href={`${sprite}#logo`}></use>
        </svg>

        <img src={messagesIcons} alt="messages icons" />

        <div className={s.divider} />

        <div className={s.circle}>
          <img
            className={s.avatar}
            src="https://cdn.pixabay.com/photo/2017/02/04/22/37/panther-2038656_960_720.png"
            alt="user avatar"
          />
        </div>

        <div className={s.textWrapper}>
          <p className={s.text}>777 tweets</p>

          <p className={s.text}>100,50 Followers</p>
        </div>

        <PrimaryButton
          text={buttonText}
          onClick={onClick}
          inlineStyle={buttonBackgroung}
        />
      </li>
    </ul>
  );
};

export default Card;
