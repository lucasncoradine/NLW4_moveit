import React, { createContext, useContext, useEffect, useState } from 'react';
import { IUser } from '../interfaces/User';
import { user as userData } from '../static/UserData';

interface UserProviderProps {
}

interface UserContextInterface extends IUser {
    levelUp: boolean,
    addExperience(value: number): void,
    completeChallenge(): void
}

const UserContext = createContext({} as UserContextInterface);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const localUser = localStorage.getItem('user');
    const _user = localUser ? JSON.parse(localUser) as IUser : userData;

    const [user, setUser] = useState(_user);
    const [levelUp, setLevelUp] = useState(false);

    const addExperience = (value: number) => {
        let _user = { ...user };
        _user.level.currentExp += value;

        setUser(_user);
    }

    const completeChallenge = () => {
        let _user = { ...user };
        _user.completeChallenges++;

        setUser(_user);
    }

    const handleLevelUp = () => {
        if (user.level.currentExp >= user.level.finalExp) {
            let _user = { ...user }
            _user.level.currentExp -= _user.level.finalExp;
            _user.level.finalExp *= 2.5;
            _user.level.value++;

            setUser(_user);
            setLevelUp(true);
        } else {
            setLevelUp(false);
        }
    }

    useEffect(() => {
        handleLevelUp();
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{
            name: user.name,
            lastName: user.lastName,
            avatar: user.avatar,
            level: user.level,
            completeChallenges: user.completeChallenges,
            levelUp,
            completeChallenge,
            addExperience
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

    return context;
}

export default UserProvider;