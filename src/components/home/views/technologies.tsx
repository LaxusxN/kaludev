import { FC } from "react";

interface TechnologiesProps {
  prop?: string;
}

export const Technologies: FC<TechnologiesProps> = () => {
  return (
    <div className="bg-blue-50 h-[50vh]  flex justify-center">
      <div
        className="w-[600px] z-20 border-white p-4 rounded-xl
        bg-white flex flex-col gap-4
        relative -top-20"
      >
        <h1 className="font-extralight text-4xl">Technologies:</h1>
        <hr />
        <div className="flex flex-row gap-8 font-serif text-lg">
          <div>
            <h1>Front-End Web Developer:</h1>
            <hr />
            <div className="pl-4">
              <h1>html</h1>
              <h1>css</h1>
              <h1>javascript</h1>
              <h1>Typescript</h1>
              <h1>React</h1>
            </div>
          </div>
          <div>
            <h1>Back-End Developer:</h1>
            <hr />
            <div className="pl-4">
              <h1>Python</h1>
              <h1>C#</h1>
              <h1>Node.js</h1>
              <h1>Go</h1>
            </div>
          </div>
          <div>
            <h1>Dev Tools:</h1>
            <hr />
            <div className="pl-4">
              <h1>Git</h1>
              <h1>Github</h1>
              <h1>Gitlab</h1>
              <h1>VSCode</h1>
              <h1>NeoVim</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
