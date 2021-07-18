import React, { ReactNode, FC } from "react";
import { inputTheme } from "./Input.galaxy";
import { css } from "../../../utils";
const { input } = inputTheme;

export const Input: FC<Input> = ({
  variant,
  children,
  className,
  label,
  as,
  placeholder,
  variants,
  href,
  ...props
}: Input) => {
  const classNames = css({
    variant: variant,
    variants: variants,
  });

  return (
    <input
      {...props}
      className={classNames}
      placeholder={placeholder}
      autoComplete='off'
    />
  );
};

export type Input = {
  children?: ReactNode;
  className?: string;
  label?: string;
  as?: "input" | "div" | "span" | "a";
  variants?: any;
  variant?: any;
  href?: string;
  type?: string;
  placeholder?: string;
};

Input.defaultProps = {
  variants: input,
  variant: "primary",
  as: "input",
  label: "",
  placeholder: "",
};
