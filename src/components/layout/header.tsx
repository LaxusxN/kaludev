import { FC } from "react";

interface HeaderProps {
  prop?: string;
}

export const Header: FC<HeaderProps> = () => {
  return (
    <div
      className="text-red-50 font-serif
      flex flex-col  items-center gap-4 p-8"
    >
      <p className="text-6xl">Kaludev </p>
      <p className="text-2xl">Coding and Solutions</p>
    </div>
  );
};

export default Header;
