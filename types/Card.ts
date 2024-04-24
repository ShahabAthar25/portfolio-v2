import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export default interface CardProp {
    name: String,
    image: StaticImageData,
    index: number,
    align: "left" | "right"
}