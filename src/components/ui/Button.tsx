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
    "flex items-center justify-center p-[10px] xl:px-[52px] xl:py-[18px] w-[113px] xl:w-[232px] h-[33px] xl:h-[58px] rounded-[50px] font-semibold text-xs xl:text-base transition duration-700 z-10";
  const variants = {
    primary: "bg-primary text-white",
    secondary: "text-secondary",
    tertiary: "bg-white text-primary hover:bg-primary hover:text-white",
    outline: "border-2 border-secondary text-primary bg-white hover:bg-gray-300 hover:border-primary",
    outlinePrimary: "border-2 border-fourth text-white bg-primary hover:bg-white hover:text-primary",
    shadowPrimary: "bg-primary text-white shadow-2xl",
    shadowTertiary: "bg-white text-primary shadow-2xl hover:bg-primary hover:text-white",
    hoverShadowPrimary: "bg-primary text-white shadow-2xl hover:bg-white hover:text-primary hover:border-2 hover:border-primary",
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
