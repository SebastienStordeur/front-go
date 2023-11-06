import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  name: string;
  children: string | React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ id, name, children, ...rest }) => {
  return (
    <button id={id} name={name} className="" {...rest}>
      {children}
    </button>
  );
};

export default React.memo(Button);
