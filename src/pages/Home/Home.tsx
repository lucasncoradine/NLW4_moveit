import React, { useEffect, useState } from 'react';
import CompleteChallenge from '../../components/CompleteChallenge/CompleteChallenge';
import Counter from '../../components/Counter/Counter';
import ExperienceBar from '../../components/ExperienceBar/ExperienceBar';
import UserInfo from '../../components/UserInfo/UserInfo';
import { useChallengeContext } from '../../contexts/ChallangeContext';
import { useUserContext } from '../../contexts/UserContext';
import CardNewCicle from './CardNewCicle/CardNewCicle';
import './Home.scss';
import ModalLevelUp from './ModalLevelUp/ModalLevelUp';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    const user = useUserContext();
    const challenge = useChallengeContext();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [card, setCard] = useState<React.ReactNode>(<CardNewCicle />);

    const onCounterComplete = () => {
        setCard(challenge.generateChallenge());
    }

    useEffect(() => {
        if (user.levelUp) {
            setShowModal(true);
        }
    }, [user.levelUp]);

    useEffect(() => {
        if (challenge.completed) {
            setCard(challenge.generateChallenge('newCicle'));            
        }
    }, [challenge]);

    return (
        <div id="home">
            <ExperienceBar />

            <div className="columns-container">
                <div className="col col-contador">
                    <div className="col-contador-content">
                        <UserInfo />
                        <CompleteChallenge />
                        <Counter startSeconds={25*60} onCompleteCallback={onCounterComplete} />
                    </div>
                </div>

                <div className="col col-card">
                    {card}
                </div>
            </div>

            <ModalLevelUp show={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
};

export default Home;