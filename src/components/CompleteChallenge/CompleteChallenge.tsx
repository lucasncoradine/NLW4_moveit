import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import { zeroPad } from '../../utils/Utils';
import './CompleteChallenge.scss';

interface CompleteChallengeProps {

}

const CompleteChallenge: React.FC<CompleteChallengeProps> = () => {
    const user = useUserContext();

    return (
        <div id="completeChallenge">
            <span>Desafios completos</span>
            <span>{zeroPad(user.completeChallenges)}</span>
        </div>
    );
};

export default CompleteChallenge;