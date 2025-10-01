import { FC, forwardRef, ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const OldButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black hover:cursor-pointer hover:bg-gray-600 rounded-full w-20"
    >
      {children}
    </button>
  );
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`bg-cyan-700 hover:cursor-pointer hover:bg-cyan-800 hover-drop rounded-full w-20 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
