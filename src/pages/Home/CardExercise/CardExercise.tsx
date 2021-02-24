import React from 'react';
import Card, { CardBody, CardFooter, CardHeader } from '../../../components/Card/Card';
import exercise from '../../../assets/illustrations/exercise.svg';
import { useUserContext } from '../../../contexts/UserContext';
import './CardExercise.scss';
import Button from '../../../components/Button/Button';
import { useChallengeContext } from '../../../contexts/ChallangeContext';

interface CardExerciseProps {

}

const CardExercise: React.FC<CardExerciseProps> = () => {
    const user = useUserContext();
    const challenge = useChallengeContext();
    const experience = 400;

    return (
        <Card id="cardExercise">
            <CardHeader>
                <span>Ganhe {experience} xp</span>
            </CardHeader>

            <CardBody>
                <div className="card-content">
                    <img src={exercise} alt="" />

                    <div className="info">
                        <span className="title">Exercite-se</span>
                        <p>É agora {user.name}! Caminhe por 3 minutos e estique suas pernas <br /> para você ficar saudável</p>
                    </div>
                </div>
            </CardBody>

            <CardFooter>
                <div className="footer-content">
                    <Button text="Falhei" theme="cancel" onClick={() => challenge.completeChallenge(0)} />
                    <Button text="Completei" theme="success" onClick={() => challenge.completeChallenge(experience)} />
                </div>
            </CardFooter>
        </Card>
    );
};

export default CardExercise;