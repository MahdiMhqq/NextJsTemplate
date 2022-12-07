import React, { ElementType, HTMLAttributes } from "react";
import CircleSpinner from "components/UI/CircleSpinner";
import { BasicButtonProps } from "..";
import { buttonStyles } from "./services";

export interface IMyButtonProps
  extends Omit<BasicButtonProps, "onClick" | "isLink" | "linkHref"> {}
export interface IMyButtonProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

const MyButton = React.forwardRef(
  (
    {
      children,
      disable = false,
      loading = false,
      size = "lg",
      type = "primary",
      customClass,
      as: Tag = "button",
      ...rest
    }: IMyButtonProps,
    ref
  ) => {
    //VARIABLES
    const { sizeStyle, typeStyle } = buttonStyles({ size, type, disable });

    return (
      <Tag
        className={`flex items-center justify-center relative rounded-2xl font-bold transition duration-300 ${sizeStyle} ${typeStyle} ${
          customClass ?? ""
        }`}
        {...rest}
        data-testid="button"
        ref={ref}
      >
        {loading && (
          <span className="flex items-center justify-center h-6 w-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <CircleSpinner
              innerSpinnerClass={
                type === "primary" || type === "secondary"
                  ? `!border-t-white`
                  : undefined
              }
            />
          </span>
        )}
        <span className={loading ? "opacity-0 invisible" : "opacity-100"}>
          {children}
        </span>
      </Tag>
    );
  }
);

MyButton.displayName = "MyButton";

export default MyButton;
