import { IUser } from "../interfaces/User";
import staticAvatar from '../assets/images/PSX_20190523_150243 (1).jpg';

export const user: IUser = {
    name: 'Lucas',
    lastName: 'Negreiros',
    avatar: staticAvatar,
    level: {
        value: 1,
        currentExp: 0,
        initialExp: 0,
        finalExp: 600
    },
    completeChallenges: 0
}