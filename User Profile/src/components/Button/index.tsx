import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function ButtonUI({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <>
      <button
        className={`bg-gradient-to-t from-green-400 to-blue-500 hover:from-blue-400 hover:to-purple-600 font-bold py-2 px-2 rounded-full ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
