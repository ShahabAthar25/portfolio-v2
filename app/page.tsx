import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/BGBeams";
import { TracingBeam } from "@/components/ui/TracingBeam";

export default function Home() {
  return (
    <main className="h-full no-scrollbar">
      <Navbar />
      <TracingBeam className="h-full">
        <Landing />
      </TracingBeam>
      <BackgroundBeams />
      <BackgroundBeams className="mt-64 sm:hidden" />
    </main>
  );
}
