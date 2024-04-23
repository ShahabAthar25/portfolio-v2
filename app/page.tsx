import About from "@/components/About";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/BGBeams";
import { TracingBeam } from "@/components/ui/TracingBeam";

export default function Home() {
  return (
    <div className="no-scrollbar">
      <Navbar />
      <main className="mx-2">
        <TracingBeam>
          <div className="ml-8">
            <Landing />
            <About />
          </div>
        </TracingBeam>
      </main>
      <BackgroundBeams />
      <BackgroundBeams className="mt-64 sm:hidden" />
    </div>
  );
}
