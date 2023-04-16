import React, { FC } from "react";

import { IPrimaryButtonProps } from "../../../types/components-types/components-types";

import s from "./PrimaryButton.module.css";

const PrimaryButton: FC<IPrimaryButtonProps> = ({
  text = "Button text",
  onClick,
  inlineStyles,
}: IPrimaryButtonProps) => (
  <button
    onClick={onClick}
    className={s.button}
    type="button"
    style={inlineStyles}
  >
    {text}
  </button>
);

export default PrimaryButton;
