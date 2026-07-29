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
    "flex items-center justify-center p-[10px] w-auto min-w-[113px] h-[38px] xl:h-[58px] rounded-[50px] font-semibold transition-all duration-300 z-10 whitespace-nowrap px-6";
  const variants = {
    primary:
      "bg-primary text-white text-xs xl:text-base hover:bg-[#0c288d]",
    secondary:
      "text-xs text-secondary font-bold bg-white hover:bg-secondary hover:text-white",
    tertiary:
      "bg-white text-primary text-xs xl:text-base hover:bg-primary hover:text-white",
    outline:
      "border-2 border-secondary text-primary text-xs xl:text-base bg-white hover:bg-gray-300 hover:border-primary",
    outlinePrimary:
      "border-2 border-fourth text-white text-xs sm:text-base bg-primary shadow-innertwo hover:bg-white hover:text-primary",
    shadowPrimarySmall:
      "bg-primary text-white text-xs xl:text-base shadow-5xl",
    shadowPrimary:
      "bg-primary text-white text-xs xl:text-base shadow-5xl",
    shadowTertiarySmall:
      "bg-white text-primary text-xs xl:text-base shadow-5xl hover:bg-primary hover:text-white",
    shadowTertiary:
      "bg-white text-primary text-xs xl:text-base shadow-5xl hover:bg-primary hover:text-white",
    hoverShadowPrimary:
      "bg-primary text-white text-xs xl:text-base shadow-5xl hover:bg-white hover:text-primary hover:border-2 hover:border-primary",
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
