import React, { InputHTMLAttributes, FC } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  errorMessage?: string;
}

const Input: FC<InputProps> = (props) => {
  return (
    <div className="w-full h-full">
      <input
        className={`border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:border-2 focus:ring-transparent border-2 appearance-none rounded-sm h-10 w-full p-3 ${
          props.isError
            ? "bg-error bg-opacity-10 focus:bg-error focus:bg-opacity-10 border-error focus:border-error "
            : "bg-faded"
        } focus:bg-white focus:shadow-md text-tertiary`}
        {...props}
      />
      {props.isError && (
        <div className="text-error pt-2">{props.errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
