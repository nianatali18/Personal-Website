
import projects from "../../lib/data";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center justify-center min-h-screen py-3 pb-[10rem] ">
      <h1 className="text-4xl font-bold text-white mb-[12rem]">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-6xl mt-[-5rem] ">
      {projects.map((project) => (
  <div key={project.id} className="bg-white rounded-lg shadow-md p-5  transform transition duration-500 ease-in-out hover:scale-95 ">
    <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-lg mb-4" />
    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
    <p className="text-gray-700 mb-4">{project.description}</p>
    <div className="mb-4 text-3xl flex flex-row gap-x-5">{project.icons.map((Icon, index) => <Icon key={index} />)}</div>
    <a href={project.url} className="text-white bg-blue-500 rounded-md w-[9rem] px-4 py-2 gap-x-3 items-center flex flex-row">View Code <FaGithub/> </a>
  </div>
))}
      </div>
    </div>
  );
}
