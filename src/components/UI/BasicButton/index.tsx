import React, { ReactNode } from "react";
import Link from "next/link";

import MyButton from "./ButtonStyle";

export interface BasicButtonProps {
  /** Indicating the size of Button */
  size?: "sm" | "md" | "lg" | "xl";
  /** For customizable purposes */
  customClass?: string;
  /** Button Variant */
  type?: "ghost" | "primary" | "secondary" | "border";
  /** Button inner elements to be rendered */
  children?: ReactNode;
  /** Funtion That Calls when button clicked */
  onClick?: () => void;
  /** Disable the button whenever needed */
  disable?: boolean;
  /** Indicated if the button is a Link or Button */
  isLink?: boolean;
  /** Href of Link Button */
  linkHref?: string;
  /** Sometimes there is need to show a loading spinner inside of button */
  loading?: boolean;
}

/** BasicButton of all project */
function BasicButton({
  size = "md",
  customClass,
  type = "primary",
  children,
  onClick,
  disable,
  isLink = false,
  linkHref = "/",
  loading = false,
}: BasicButtonProps) {
  return (
    <>
      {isLink ? (
        <Link href={linkHref} legacyBehavior passHref>
          <MyButton
            as={"a"}
            size={size}
            type={type}
            customClass={customClass}
            disable={disable}
            loading={loading}
          >
            {children}
          </MyButton>
        </Link>
      ) : (
        <MyButton
          as={"button"}
          size={size}
          type={type}
          customClass={customClass}
          disable={disable}
          loading={loading}
          onClick={onClick}
        >
          {children}
        </MyButton>
      )}
    </>
  );
}

export default BasicButton;
