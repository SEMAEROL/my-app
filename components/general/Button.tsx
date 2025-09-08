"use client"
import type React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  text: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean
  outline?: boolean
  disabled?: boolean
  //icon?: IconType | undefined
}

const Button: React.FC<ButtonProps> = ({ text, onClick, small, outline, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`rounded-lg p-3 ${small ? "w-[250px]" : "w-full"} ${outline ? "border text-black" : ""}`}>
      {text}
    </button>
  )
}

export default Button
