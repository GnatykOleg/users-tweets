import React, { FC } from "react";

import { COLORS } from "../../../conts/colors-const";

import { Comment } from "react-loader-spinner";

import s from "./Loader.module.css";

const Loader: FC = () => (
  <div className={s.loaderWrapper}>
    <Comment
      visible={true}
      height="80"
      width="80"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor={COLORS.accentColor}
    />
  </div>
);

export default Loader;
