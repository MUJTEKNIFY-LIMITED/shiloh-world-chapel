import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}

const Button = ({ children, variant = "primary", onClick, ...props }: ButtonProps) => {
  const base = "flex items-center justify-center px-[33px] py-[16px] w-[191px] h-[54px] rounded-[30px] font-semibold text-[16px] transition";
  const variants = {
    primary: "bg-primary text-white border-2 border-outline hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
