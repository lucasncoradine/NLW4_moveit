import React from 'react';
import Card, { CardBody } from '../../../components/Card/Card';
import arrowLevelUp from '../../../assets/icons/arrow-level-up.svg';
import './CardNewCicle.scss';

interface CardNewCicleProps {
    
}

const CardNewCicle: React.FC<CardNewCicleProps> = () => {
    return (
        <Card id="cardNewCicle">
            <CardBody>
                <div className="text">
                    <p>Complete um ciclo<br /> para receber desafios</p>
                </div>

                <div className="info">
                    <img src={arrowLevelUp} alt=""/>
                    <span>Avance de level<br /> completando os desafios.</span>
                </div>
            </CardBody>
        </Card>
    );
};

export default CardNewCicle;