import { Level } from "./Level";

export interface User {
    level: Level,
    avatar: string,
    name: string,
    completeChallenges: number
}