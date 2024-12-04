import { FC } from "react";
import kaludemy from "../../../assets/kaludemy.png";
import beautynails from "../../../assets/beautynails.png";
import { CardProject } from "../../basic";

interface ProjectsProps {
  prop?: string;
}
const projects = [
  {
    name: "kaludemy",
    url: "https://laxusxn.github.io/kaludemy/",
    image: kaludemy,
  },
  {
    name: "Beauty Nails",
    url: "https://beauty-nails-l-n.netlify.app/",
    image: beautynails,
  },
];

const handleRedirect = (url: string) => {
  window.open(url, "_blank");
};

export const Projects: FC<ProjectsProps> = () => {
  return (
    <div className="bg-blue-50 p-16 ">
      <h1 className="font-bold text-4xl mb-8 ">Mis Proyectos:</h1>
      <div
        className=" 
      flex flex-row flex-wrap justify-center gap-16"
      >
        {projects.map((project) => (
          <CardProject
            image={project.image}
            name={project.name}
            onClick={() => handleRedirect(project.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
