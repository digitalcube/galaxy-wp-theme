import React, { ReactNode, FC } from "react";
import { css } from "../../../utils/";
import { buttonTheme } from "./Button.galaxy";
const { button } = buttonTheme;

export const Button: FC<Button> = ({
  variant,
  children,
  className,
  label,
  as,
  variants,
  href,
}: Button) => {
  if (!label) return null;

  const classNames = css({
    variant: variant,
    variants: variants,
  });

  return (
    <a href={`${href}`} className={`${className} ${classNames}`}>
      {label}
      {children}
    </a>
  );
};

export type Button = {
  children?: ReactNode;
  className?: string;
  label?: string;
  as?: "button" | "div" | "span" | "a";
  variants?: any;
  variant?: any;
  href?: string;
  type?: string;
};

Button.defaultProps = {
  variants: button,
  href: "#",
  variant: "primary",
  as: "a",
  label: "Button",
  className: "",
};
