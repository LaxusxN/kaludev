import { FC } from "react";
import avatar from "../../../assets/avatar.png";

interface WelcomeProps {
  prop?: string;
}

export const Welcome: FC<WelcomeProps> = () => {
  return (
    <div
      className="flex flex-col gap-8 bg-blue-50
    justify-center items-center  h-[60vh] text-center"
    >
      <p className="font-bold text-4xl ">Software Web Developer</p>
      <p className="font-extralight text-xl">
        I design and code websites to improve your bussiness. I love what I do
      </p>
      <img
        src={avatar}
        className="w-[200px] h-[200px]
        rounded-full grow-0 shrink-0"
      />
    </div>
  );
};

export default Welcome;
