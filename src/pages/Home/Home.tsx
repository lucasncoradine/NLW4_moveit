import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import CompleteChallenge from '../../components/CompleteChallenge/CompleteChallenge';
import Counter from '../../components/Counter/Counter';
import ExperienceBar from '../../components/ExperienceBar/ExperienceBar';
import UserInfo from '../../components/UserInfo/UserInfo';
import './Home.scss';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    const [initCount, setInitCount] = useState(false);

    return (
        <div id="home">
            <ExperienceBar />

            <div className="col-contador">
                <UserInfo />
                <CompleteChallenge />
                <Counter startMinutes={25} init={initCount}/>
                
                <Button theme="cancel" text="Iniciar um ciclo" onClick={() => setInitCount(!initCount)} />
            </div>
        </div>
    );
};

export default Home;