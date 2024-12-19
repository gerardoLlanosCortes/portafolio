import { ReactNode } from "react";

interface ButtonProps {
  title: string;
  id: string;
  rightIcon?: ReactNode; // El ícono que aparece a la derecha
  leftIcon?: ReactNode; // El ícono que aparece a la izquierda
  containerClass?: string;
}

const ButtonCV = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={`flex items-center gap-3 relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-white px-7 py-3 text-black  ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-x-hidden uppercase text-base font-normal font-inconsolata">
        {title}
      </span>
      {rightIcon}
    </button>
  );
};

export default ButtonCV;
