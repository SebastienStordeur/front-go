import React, { forwardRef, InputHTMLAttributes, Ref } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type?: string;
  ref?: Ref<HTMLInputElement>;
}

const Input: React.FC<InputProps> = forwardRef(
  ({ id, name, type, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="text-4xl text-red-600">
          {name}
        </label>
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

export default React.memo(Input);
