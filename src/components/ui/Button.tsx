import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "tertiary"
    | "shadowPrimarySmall"
    | "shadowPrimary"
    | "shadowTertiarySmall"
    | "shadowTertiary"
    | "hoverShadowPrimary"
    | "outlinePrimary";
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  onClick,
  ...props
}: ButtonProps) => {
  const base =
    "flex items-center justify-center p-[10px] w-[113px] h-[33px] rounded-[50px] font-semibold transition duration-700 z-10";
  const variants = {
    primary:
      "xl:px-[52px] xl:py-[18px] xl:w-[232px] xl:h-[58px] bg-primary text-white text-xs xl:text-base",
    secondary:
      "xl:px-[10px] xl:py-[10px] xl:w-[113px] xl:h-[33px] text-xs text-secondary font-bold bg-white hover:bg-secondary hover:text-white",
    tertiary:
      "xl:px-[52px] xl:py-[18px] xl:w-[232px] xl:h-[58px] bg-white text-primary text-xs xl:text-base hover:bg-primary hover:text-white",
    outline:
      "xl:px-[52px] xl:py-[18px] xl:w-[232px] xl:h-[58px] border-2 border-secondary text-primary text-xs xl:text-base bg-white hover:bg-gray-300 hover:border-primary",
    outlinePrimary:
      "xl:px-[33px] py-[16px] w-[191px] h-[54px] border-2 border-fourth text-white text-base bg-primary shadow-innertwo hover:bg-white hover:text-primary",
    shadowPrimarySmall:
      "xl:px-[22px] xl:py-[18px] xl:w-[170px] xl:h-[58px] bg-primary text-white text-xs xl:text-base shadow-5xl",
    shadowPrimary:
      "xl:px-[52px] xl:py-[18px] xl:w-[232px] xl:h-[58px] bg-primary text-white text-xs xl:text-base shadow-5xl",
    shadowTertiarySmall:
      "xl:px-[22px] xl:py-[18px] xl:w-[170px] xl:h-[58px] bg-white text-primary text-xs xl:text-base shadow-5xl hover:bg-primary hover:text-white",
    shadowTertiary:
      "xl:px-[52px] xl:py-[18px] xl:w-[232px] xl:h-[58px] bg-white text-primary text-xs xl:text-base shadow-5xl hover:bg-primary hover:text-white",
    hoverShadowPrimary:
      "xl:px-[52px] xl:py-[18px] xl:w-[232px] xl:h-[58px] bg-primary text-white text-xs xl:text-base shadow-5xl hover:bg-white hover:text-primary hover:border-2 hover:border-primary",
  };


  return (
    <button
      className={`${base} ${variants[variant]}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
