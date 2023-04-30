import React from "react";

const shapes = {
  icbCircleBorder14: "rounded-[14px]",
  RoundedBorder8: "rounded-lg",
} as const;
const variants = {
  icbFillBluegray10019: "bg-blue_gray_100_19",
  OutlineBluegray200:
    "bg-white_A700 border border-blue_gray_200 border-solid text-gray_600",
  FillBlue800: "bg-blue_800 text-white_A700",
  OutlineBlue800:
    "bg-white_A700 border border-blue_800 border-solid text-blue_800",
} as const;
const sizes = { smIcn: "p-1", sm: "p-[11px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "",
  size = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
