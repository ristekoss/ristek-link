import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: ReactNode;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { isLoading = false, disabled = false, children, ...rest } = props;

  return (
    <button
      className={`${
        disabled || isLoading
          ? ' bg-gray-500 hover:bg-gray-600'
          : 'bg-primary hover:bg-dark'
      } text-white py-3 px-5 rounded-md font-poppins focus:outline-none focus:ring-transparent w-32`}
      {...rest}
    >
      {isLoading ? (
        <span className="font-semibold text-lg">Loading...</span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
