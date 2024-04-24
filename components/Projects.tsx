"use client";

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
import { useState } from "react";

export default function Projects(): JSX.Element {
  const [index, setIndex] = useState(0);

  return (
    <section className="py-4 pl-8 pr-4">
      <p className="text-secondary text-sm">Projects</p>
      <h1 className="text-text text-[26px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-glow">
        My Work
      </h1>
      <ProjectSection
        title="Web Development (MERN)"
        projects={MERNStackProject}
        index={index}
        setIndex={setIndex}
      />
      <ProjectSection
        title="Web Development (React JS/Next JS)"
        projects={ReactNextProjects}
        index={index}
        setIndex={setIndex}
      />
      <ProjectSection
        title="Web Development (Django)"
        projects={DjangoProject}
        index={index}
        setIndex={setIndex}
      />
      <ProjectSection
        title="Web Development (PHP)"
        projects={PHPVanillaProject}
        index={index}
        setIndex={setIndex}
      />
      <ProjectSection
        title="Computer Vision (Python)"
        projects={ComputerVisionProjects}
        index={index}
        setIndex={setIndex}
      />
      <ProjectSection
        title="Data Science (Python)"
        projects={DataScienceProjects}
        index={index}
        setIndex={setIndex}
      />
      <ProjectSection
        title="Crypto Currencies (Python)"
        projects={CryptoCurrenciesProjects}
        index={index}
        setIndex={setIndex}
      />
      <ProjectSection
        title="Custom Programming Languages"
        projects={CustomProgrammingLanguages}
        index={index}
        setIndex={setIndex}
      />
    </section>
  );
}
