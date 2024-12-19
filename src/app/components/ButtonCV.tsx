import { ReactNode } from "react";

interface ButtonProps {
  title: string;
  id: string;
  rightIcon?: ReactNode; // El ícono que aparece a la derecha
  leftIcon?: ReactNode; // El ícono que aparece a la izquierda
  customclassName?: string;
}

const ButtonCV = ({ title, id, rightIcon }: ButtonProps) => {
  return (
    <button
      id={id}
      className={`group relative flex items-center gap-3 z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-white px-7 py-3 text-black`}
    >
      <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-skyBlue opacity-[3%]"></span>
      <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-80 -translate-y-24 rotate-45 bg-skyBlue opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-0"></span>
      <div className="flex items-center gap-3 ">
        <span className="relative  text-left text-black transition-all duration-200 ease-in-out group-hover:text-white">
          {title}
        </span>
        <span className="relative text-left text-black transition-all duration-0 ease-in-out group-hover:text-white">
          {rightIcon}
        </span>
      </div>
    </button>
  );
};

export default ButtonCV;
