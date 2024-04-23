import ProfilePic from "@/assets/ProfilePic.jpeg";
import Card from "./Card";

export default function Projects(): JSX.Element {
  return (
    <section className="py-4 pl-8 pr-4">
      <p className="text-secondary text-sm">Projects</p>
      <h1 className="text-text text-[26px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-glow">
        My Work
      </h1>
      <section>
        <p className="text-right text-secondary text-sm drop-shadow-glow">
          Web Development (React JS)
        </p>
        <div className="grid grid-cols-1 gaps-4">
          <Card name="Gmail Clone" image={ProfilePic} index={0} align="left" />
          <Card name="Gmail Clone" image={ProfilePic} index={1} align="right" />
        </div>
      </section>
    </section>
  );
}
