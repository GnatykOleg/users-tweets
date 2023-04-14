import React, { FC } from "react";

import { IPrimaryButtonProps } from "../../../types/components-types/components-types";

import s from "./PrimaryButton.module.css";

const PrimaryButton: FC<IPrimaryButtonProps> = ({
  text,
  onClick,
  inlineStyle,
}: IPrimaryButtonProps) => (
  <button
    onClick={onClick}
    className={s.button}
    type="button"
    style={inlineStyle}
  >
    {text}
  </button>
);

export default PrimaryButton;
