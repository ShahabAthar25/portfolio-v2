import { IProjectSection } from "@/types/Projects";
import Card from "./Card";

export default function ProjectSection({ title, projects }: IProjectSection) {
  return (
    <section>
      <div className="flex items-end justify-center flex-col">
        <p className="text-right text-secondary text-sm drop-shadow-glow my-4">
          {title}
        </p>
      </div>
      <div className="grid grid-cols-1 gaps-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            name={project.name}
            image={project.image}
            index={index}
            align={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </section>
  );
}
