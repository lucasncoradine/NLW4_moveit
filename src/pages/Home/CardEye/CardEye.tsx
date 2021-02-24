import React from 'react';
import Card, { CardBody, CardFooter, CardHeader } from '../../../components/Card/Card';
import eye from '../../../assets/illustrations/eye.svg';
import { useUserContext } from '../../../contexts/UserContext';
import './CardEye.scss';
import Button from '../../../components/Button/Button';

interface CardEyeProps {

}

const CardEye: React.FC<CardEyeProps> = () => {
    const user = useUserContext();
    const experience = 400;

    return (
        <Card id="cardEye">
            <CardHeader>
                <span>Ganhe {experience} xp</span>
            </CardHeader>

            <CardBody>
                <div className="card-content">
                    <img src={eye} alt="" />

                    <div className="info">
                        <span className="title">Mova os olhos</span>
                        <p>É agora {user.name}! Descanse seus olhos e os mova por 3 minutos<br /> para você ficar saudável</p>
                    </div>
                </div>
            </CardBody>

            <CardFooter>
                <div className="footer-content">
                    <Button text="Falhei" theme="cancel" />
                    <Button text="Completei" theme="success" onClick={() => user.addExperience(experience)} />
                </div>
            </CardFooter>
        </Card>
    );
};

export default CardEye;