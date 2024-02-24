import { FC } from "react";

interface AboutProps {
  prop?: string;
}

export const About: FC<AboutProps> = () => {
  return (
    <div
      className="flex flex-col items-center justify-center
      h-[60vh] bg-blue-600 text-blue-100 gap-8"
    >
      <p className="font-bold text-4xl">
        HI, I'm Luis Calagua. Nice to meet you
      </p>
      <p className="text-lg font-sans w-[600px]">
        Since begining on my journey as a front-end developer 2 years ago, I
        have worked for agencies, consulted for startups, and learned from
        talented individuals. Therefore, I have chosen to initiate this project
        to enhance my skills and deliver the utmost quality for your website
        needs
      </p>
    </div>
  );
};

export default About;
