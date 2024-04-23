import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/Card";
import CardProp from "@/types/Card";
import { cn } from "@/lib/utils";

export default function Card({
  name,
  image,
  index,
  align,
}: CardProp): JSX.Element {
  return (
    <CardContainer className="my-5 w-full group cursor-pointer">
      <CardBody className="w-full relative">
        <CardItem
          className={cn(
            "absolute top-2/4 z-50",
            align === "left" ? "left-6" : "right-6"
          )}
          translateZ="70"
          translateY="-5"
        >
          <div className={cn(align === "left" ? "text-left" : "text-right")}>
            <h1 className="text-text text-[22px] font-medium drop-shadow-glow">
              {name}
            </h1>
            <div className="w-full mt-1 border-y-2 border-solid border-text rounded-full drop-shadow-glow"></div>
            <p className="text-secondary text-sm">
              {index >= 10 ? index : "0" + index.toString()}
            </p>
          </div>
        </CardItem>
        <CardItem
          className={cn(
            "w-full flex",
            align === "left" ? "justify-end" : "justify-start"
          )}
          translateZ="40"
          translateY="5"
        >
          <div className="w-[80%]">
            <Image
              src={image}
              height="1000"
              width="1000"
              className="h-40 w-full object-cover rounded-xl group-hover:drop-shadow-glow duration-300"
              alt="thumbnail"
            />
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
