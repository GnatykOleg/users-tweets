import React, { FC } from "react";

import { ITweetsFilterProps } from "../../../types/components-types/components-types";

import { REDUX_FILTER } from "../../../conts/redux-const";

import s from "./TweetsFilter.module.css";

const TweetsFilter: FC<ITweetsFilterProps> = ({
  onChange,
}: ITweetsFilterProps) => {
  const { ALL, FOLLOW, FOLLOWING } = REDUX_FILTER;

  return (
    <select className={s.select} onChange={onChange} name="filter">
      <option defaultValue={ALL}>{ALL}</option>

      <option>{FOLLOWING}</option>

      <option>{FOLLOW}</option>
    </select>
  );
};

export default TweetsFilter;
