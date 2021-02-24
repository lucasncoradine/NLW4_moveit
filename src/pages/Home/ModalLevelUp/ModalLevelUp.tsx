import React from 'react';
import twitter from '../../../assets/icons/twitter.svg';
import Button from '../../../components/Button/Button';
import { CardBody, CardFooter } from '../../../components/Card/Card';
import Modal, { ModalProps } from '../../../components/Modal/Modal';
import { useUserContext } from '../../../contexts/UserContext';
import './ModalLevelUp.scss';

interface ModalLevelUpProps extends ModalProps {
}

const ModalLevelUp: React.FC<ModalLevelUpProps> = ({...modalProps}) => {
    const user = useUserContext();

    return (
        <div id="cardLevelUp">
            <Modal {...modalProps}>
                <CardBody>
                    <div className="card-level-up-body">
                        <div className="level-image">
                            <span>{user.level.value}</span>
                        </div>

                        <div className="info">
                            <span className="title">Parabéns!</span>
                            <p>Você alcançou um novo level.</p>
                        </div>
                    </div>
                </CardBody>

                <CardFooter>
                    <div className="card-level-up-footer">
                        <Button theme="twitter" icon={twitter} text="Compartilhar no Twitter" />
                    </div>
                </CardFooter>
            </Modal>
        </div>
    );
};

export default ModalLevelUp;