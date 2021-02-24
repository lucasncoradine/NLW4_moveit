import { Level } from "./Level";

export interface IUser {
    level: Level,
    avatar: string,
    name: string,
    lastName: string,
    completeChallenges: number
}