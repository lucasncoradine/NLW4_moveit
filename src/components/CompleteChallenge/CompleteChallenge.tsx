import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import './CompleteChallenge.scss';

interface CompleteChallengeProps {

}

const CompleteChallenge: React.FC<CompleteChallengeProps> = () => {
    const user = useUserContext();

    return (
        <div id="completeChallenge">
            <span>Desafios completos</span>
            <span>{user.completeChallenges !== 0 ? user.completeChallenges : 'Nenhum'}</span>
        </div>
    );
};

export default CompleteChallenge;