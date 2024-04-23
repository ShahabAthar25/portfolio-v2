import {
  ComputerVisionProjects,
  CryptoCurrenciesProjects,
  CustomProgrammingLanguages,
  DataScienceProjects,
  DjangoProject,
  MERNStackProject,
  PHPVanillaProject,
  ReactNextProjects,
} from "@/data/Projects";
import ProjectSection from "./ProjectSection";

export default function Projects(): JSX.Element {
  return (
    <section className="py-4 pl-8 pr-4">
      <p className="text-secondary text-sm">Projects</p>
      <h1 className="text-text text-[26px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-glow">
        My Work
      </h1>
      <ProjectSection
        title="Web Development (MERN)"
        projects={MERNStackProject}
      />
      <ProjectSection
        title="Web Development (React JS/Next JS)"
        projects={ReactNextProjects}
      />
      <ProjectSection
        title="Web Development (Django)"
        projects={DjangoProject}
      />
      <ProjectSection
        title="Web Development (PHP)"
        projects={PHPVanillaProject}
      />
      <ProjectSection
        title="Computer Vision (Python)"
        projects={ComputerVisionProjects}
      />
      <ProjectSection
        title="Data Science (Python)"
        projects={DataScienceProjects}
      />
      <ProjectSection
        title="Crypto Currencies (Python)"
        projects={CryptoCurrenciesProjects}
      />
      <ProjectSection
        title="Custom Programming Languages"
        projects={CustomProgrammingLanguages}
      />
    </section>
  );
}
