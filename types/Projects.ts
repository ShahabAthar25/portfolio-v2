import { StaticImageData } from "next/image"
import { Dispatch, SetStateAction } from "react"

export interface IProject {
    name: string,
    image: StaticImageData,
    github: string,
    live: string | null
}

export interface IProjectSection {
    title: string,
    projects: IProject[],
    index: number,
    setIndex: Dispatch<SetStateAction<number>>
}