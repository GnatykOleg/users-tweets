import React, { FC } from "react";

import { updateUserOperation } from "../../../redux/tweets/tweetsOperations";

import {
  addToFollowingList,
  deleteFromFollowingList,
} from "../../../redux/tweets/tweetsSlice";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";

import { getTweetsDataSelector } from "../../../redux/tweets/tweetsSelectors";

import { ICardProps } from "../../../types/components-types/components-types";

import { COLORS } from "../../../conts/colors-const";

import { PrimaryButton } from "../../index";

import messagesIcons from "../../../assets/images/messages-icons.png";

import sprite from "../../../assets/icons/sprite.svg";

import s from "./Card.module.css";

const Card: FC<ICardProps> = ({ user }: ICardProps) => {
  const dispatch = useAppDispatch();

  const { followingList } = useAppSelector(getTweetsDataSelector);

  const { avatar, followers, id, tweets } = user;

  const isFollowing = followingList.includes(id);

  const followersWithComma = `${followers.toLocaleString("en")} followers`;

  const onClick = () => {
    dispatch(
      updateUserOperation({
        followers: isFollowing ? followers - 1 : followers + 1,
        id: id,
      })
    );

    dispatch(
      isFollowing ? deleteFromFollowingList(id) : addToFollowingList(id)
    );
  };

  return (
    <li className={s.item}>
      <svg className={s.logo} width={76}>
        <use href={`${sprite}#logo`}></use>
      </svg>

      <img width={308} height={168} src={messagesIcons} alt="messages icons" />

      <div className={s.divider} />

      <div className={s.circle}>
        <img
          width={80}
          height={80}
          className={s.avatar}
          src={avatar}
          alt="user avatar"
        />
      </div>

      <div className={s.textWrapper}>
        <p className={s.text}>{`${tweets} tweets`}</p>

        <p className={s.text}>{followersWithComma}</p>
      </div>

      <PrimaryButton
        text={isFollowing ? "Following" : "Follow"}
        onClick={onClick}
        inlineStyles={{
          background: isFollowing ? COLORS.accentColor : COLORS.primaryColor,
          margin: "0 auto",
        }}
      />
    </li>
  );
};

export default Card;
