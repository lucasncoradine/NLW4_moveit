import React, { createContext, useContext, useState } from 'react';
import { User } from '../interfaces/User';
import staticAvatar from '../assets/images/PSX_20190523_150243 (1).jpg';

interface UserProviderProps {
}

interface UserContextInterface extends User {
}

const UserContext = createContext({} as UserContextInterface);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const user: User = {
        name: 'Lucas Negreiros',
        avatar: staticAvatar,
        level: {
            value: 1,
            currentExp: 0,
            initialExp: 0,
            finalExp: 600
        },
        completeChallenges: 0
    }

    const [level, setLevel] = useState(user.level);
    const [name, setName] = useState(user.name);
    const [avatar, setAvatar] = useState(user.avatar);
    const [completeChallenges, setCompleteChallenges] = useState(user.completeChallenges);

    return (
        <UserContext.Provider value={{
            name,
            avatar,
            level,
            completeChallenges
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error("useUserContext deve ser usado dentro de um componente UserProvider");
    }

    return {
        name: context.name,
        avatar: context.avatar,
        level: context.level,
        completeChallenges: context.completeChallenges
    }
}

export default UserProvider;