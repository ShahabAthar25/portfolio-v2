import Image from "next/image";
import profilePic from "@/assets/ProfilePic.jpeg";

export default function About(): JSX.Element {
  return (
    <div className="bg-shade-background py-4 pl-8 pr-4">
      <h1 className="text-text text-[26px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-glow">
        Who I Am
      </h1>
      <div className="flex items-center justify-center my-5">
        <div className="rounded-full border-t-4 border-solid border-secondary">
          <div className="rounded-full border-b-4 border-solid border-secondary">
            <Image
              src={profilePic}
              width={300}
              height={400}
              placeholder="blur"
              alt="Profile Picture"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <p className="font-light text-[18px] leading-6 text-justify text-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
        reprehenderit quibusdam, consectetur officia ipsa eveniet esse
        doloremque dolorem explicabo numquam vero sed corporis, atque mollitia!
        Laboriosam dignissimos totam reiciendis at Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Rem amet sed ad facilis deleniti magni
        accusantium natus, exercitationem ducimus a quas quibusdam! Nostrum ab
        vero, quia beatae rem odit molestias! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Expedita, optio. Dolorum et aliquid
        numquam inventore distinctio quas libero non laudantium laboriosam
        dignissimos nihil, odit cumque ipsa illo qui, mollitia maiores!
      </p>
    </div>
  );
}
