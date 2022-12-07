import { IMyButtonProps } from "..";

interface IButtonStyles
  extends Required<Pick<IMyButtonProps, "size" | "type" | "disable">> {}

export const buttonStyles = (props: IButtonStyles) => {
  const { size, type, disable } = props;
  return {
    sizeStyle: sizeStyles[size],
    typeStyle:
      typeStyles[type] +
      " " +
      (disable
        ? type !== "border"
          ? disableStyles.borderLess
          : disableStyles.border
        : disableStyles.ord),
  };
};

const sizeStyles: Record<IButtonStyles["size"], string> = {
  sm: "py-1 px-4 text-button font-medium",
  md: "py-[0.375rem] px-4 text-h5 font-medium",
  lg: "py-[0.375rem] px-4 text-h3 font-bold",
  xl: "py-3 px-4 text-h3 font-medium",
};

const typeStyles: Record<IButtonStyles["type"], string> = {
  primary:
    "bg-primary text-tprimary hover:bg-lprimary hover:text-tprimary active:bg-lprimary",
  secondary:
    "bg-lprimary text-tdisable hover:bg-llprimary focus:outline-primary active:bg-lllprimary",
  border:
    "bg-transparent border-2 border-primary text-tprimary hover:border-transparent hover:text-tprimary hover:bg-primary active:bg-lprimary",
  ghost:
    "bg-transparent text-tprimary hover:bg-lgray active:bg-lllgray hover:text-tprimary active:text-tprimary",
};

const disableStyles = {
  ord: "cursor-pointer",
  border:
    "bg-gray !border-lineDisabled text-white hover:bg-lgray active:bg-tdisable cursor-not-allowed",
  borderLess:
    "bg-transparent border-lineDisabled text-lineDisabled border-2 hover:shadow-none cursor-not-allowed",
};