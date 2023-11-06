import { forwardRef, InputHTMLAttributes, Ref } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type?: string;
}

const Input: React.FC<InputProps> = forwardRef(
  ({ id, name, type, ...rest }, ref: Ref<HTMLInputElement>) => {
    return (
      <div>
        <label htmlFor={id}>{name}</label>
        <input
          id={id}
          name={name}
          type={type || "text"}
          className=""
          ref={ref}
          autoComplete="true"
          role="textbox"
          aria-describedby={id}
          tabIndex={0}
          {...rest}
        />
      </div>
    );
  }
);

export default Input;
