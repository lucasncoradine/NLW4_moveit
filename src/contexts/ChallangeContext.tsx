import React, { createContext, useContext, useState } from 'react';
import CardExercise from '../pages/Home/CardExercise/CardExercise';
import CardEye from '../pages/Home/CardEye/CardEye';
import CardNewCicle from '../pages/Home/CardNewCicle/CardNewCicle';
import { randomNumber } from '../utils/Utils';
import { useUserContext } from './UserContext';

interface ChallengeProviderProps {

}

interface ChallengeContextProps {
    completed: boolean,
    completeChallenge(exp: number): void,
    generateChallenge(type?: Challenge): JSX.Element
}

type Challenge = 'exercise' | 'eye' | 'newCicle';

const ChallengeContext = createContext({} as ChallengeContextProps);

const ChallengeProvider: React.FC<ChallengeProviderProps> = ({ children }) => {
    const user = useUserContext();
    const [completed, setCompleted] = useState<boolean>(false);

    const generateChallenge = (type?: Challenge) => {
        let random = randomNumber(1, 2);
        let switcher = type || random;

        setCompleted(false);

        switch (switcher) {
            case 1:
            case 'exercise':
                return (<CardExercise />);
            case 2:
            case 'eye':
                return (<CardEye />);
            default:
            case 'newCicle':
                return (<CardNewCicle />);
        }
    }

    /**
     * 
     * @param exp Experiência ganha
     */
    const completeChallenge = (exp: number) => {
        if (exp !== 0) {
            user.addExperience(exp);
            user.completeChallenge();
        }
        
        setCompleted(true);
    }

    return (
        <ChallengeContext.Provider value={{
            completed,
            completeChallenge,
            generateChallenge
        }}>
            {children}
        </ChallengeContext.Provider>
    );
};

export const useChallengeContext = () => {
    const context = useContext(ChallengeContext);

    if (context === undefined) {
        throw new Error("useChallengeContext deve ser usado dentro de um componente ChallendeProvider");
    }

    return context;
}

export default ChallengeProvider;