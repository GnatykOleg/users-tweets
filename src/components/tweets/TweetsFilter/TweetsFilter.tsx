import React, { FC } from "react";

import { useAppSelector } from "../../../hooks/redux-hooks";

import { getTweetsDataSelector } from "../../../redux/tweets/tweetsSelectors";

import { ITweetsFilterProps } from "../../../types/components-types/components-types";

import { REDUX_FILTER } from "../../../conts/redux-const";

import s from "./TweetsFilter.module.css";

const TweetsFilter: FC<ITweetsFilterProps> = ({
  onChange,
}: ITweetsFilterProps) => {
  const { filteredBy } = useAppSelector(getTweetsDataSelector);

  const { ALL, FOLLOW, FOLLOWING } = REDUX_FILTER;

  return (
    <select
      className={s.select}
      onChange={onChange}
      name="filter"
      defaultValue={filteredBy}
    >
      <option value={ALL}>{ALL}</option>

      <option value={FOLLOWING}>{FOLLOWING}</option>

      <option value={FOLLOW}>{FOLLOW}</option>
    </select>
  );
};

export default TweetsFilter;
