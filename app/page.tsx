import About from "@/components/About";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/BGBeams";
import { TracingBeam } from "@/components/ui/TracingBeam";

export default function Home(): JSX.Element {
  return (
    <div className="no-scrollbar">
      <Navbar />
      <TracingBeam>
        <Landing />
        <About />
      </TracingBeam>
      <BackgroundBeams />
    </div>
  );
}
