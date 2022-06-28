import { InputHTMLAttributes, FC } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  errorMessage?: string;
  wrapperClassName?: string;
  errorMessageClassName?: string;
}

const Input: FC<InputProps> = (props) => {
  const {
    isError = false,
    errorMessage,
    wrapperClassName,
    errorMessageClassName,
    ...rest
  } = props;
  return (
    <div className={`w-full h-full ${wrapperClassName}`}>
      <input
        className={`border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:border-2 focus:ring-transparent border-2 appearance-none rounded-sm h-10 w-full p-3 ${
          isError
            ? 'bg-error bg-opacity-10 focus:bg-error focus:bg-opacity-10 border-error focus:border-error '
            : 'bg-faded'
        } focus:bg-white focus:shadow-md text-tertiary`}
        {...rest}
      />
      {isError && (
        <div className={`text-error mt-2 ${errorMessageClassName}`}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Input;
