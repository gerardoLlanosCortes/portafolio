import { ReactNode } from "react";

const Icon = ({
  customClass,
  size,
  icon,
}: {
  customClass?: string;
  size: string;
  icon: ReactNode;
}) => {
  return (
    <figure className={`w-${size} h-${size} rounded-full ${customClass} `}>
      {icon}
    </figure>
  );
};

export default Icon;
