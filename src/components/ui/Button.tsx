import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "tertiary" | "shadowPrimary" | "shadowTertiary" | "hoverShadowPrimary" | "outlinePrimary";
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  onClick,
  ...props
}: ButtonProps) => {
  const base =
    "flex items-center justify-center p-[10px] w-[113px] h-[33px] rounded-[50px] font-semibold text-xs xl:text-base transition duration-700 z-10";
  const variants = {
    primary: "xl:px-[52px] xl:py-[18px] xl:w-[232px] xl:h-[58px] bg-primary text-white",
    secondary: "xl:px-[10px] xl:py-[10px] xl:w-[113px] xl:h-[33px] xl:text-xs text-secondary font-bold bg-white hover:bg-secondary hover:text-white",
    tertiary: "xl:px-[52px] xl:py-[18px] xl:w-[232px] xl:h-[58px] bg-white text-primary hover:bg-primary hover:text-white",
    outline: "xl:px-[52px] xl:py-[18px] xl:w-[232px] xl:h-[58px] border-2 border-secondary text-primary bg-white hover:bg-gray-300 hover:border-primary",
    outlinePrimary: "xl:px-[52px] xl:py-[18px] xl:w-[232px] xl:h-[58px] border-2 border-fourth text-white bg-primary hover:bg-white hover:text-primary",
    shadowPrimary: "xl:px-[52px] xl:py-[18px] xl:w-[232px] xl:h-[58px] bg-primary text-white shadow-2xl",
    shadowTertiary: "xl:px-[52px] xl:py-[18px] xl:w-[232px] xl:h-[58px] bg-white text-primary shadow-2xl hover:bg-primary hover:text-white",
    hoverShadowPrimary: "xl:px-[52px] xl:py-[18px] xl:w-[232px] xl:h-[58px] bg-primary text-white shadow-2xl hover:bg-white hover:text-primary hover:border-2 hover:border-primary",
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
