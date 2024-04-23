import { StaticImageData } from "next/image"

export interface IProject {
    name: string,
    image: StaticImageData,
    github: string,
    live: string | null
}

export interface IProjectSection {
    title: string,
    projects: IProject[]
}