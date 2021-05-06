import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  dsaibled?: boolean;
  children?: ReactNode;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  return(
    <button className={`${props.disabled || props.isLoading ? ' bg-gray-500 hover:bg-gray-600' : 'bg-primary hover:bg-dark'} text-white py-3 px-5 rounded-md font-poppins focus:outline-none focus:ring-transparent w-32`} {...props} >
    {props.isLoading ? <div className=" font-semibold text-lg" >Loading...</div> : props.children}
  </button>
  )
}

export default Button