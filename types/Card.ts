import { StaticImageData } from "next/image";

export default interface CardProp {
    name: String,
    image: StaticImageData,
    index: number,
    align: "left" | "right"
}