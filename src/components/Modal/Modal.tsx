import React from 'react';
import times from '../../assets/icons/times.svg';
import Card from '../Card/Card';
import './Modal.scss';

export interface ModalProps {
    show: boolean,
    onClose: Function
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
    return (
        <div className={`modal ${show ? 'show' : 'hide'}`}>
            <div className="modal-backdrop"></div>

            <div className="modal-wrapper">
                <div className="modal-content">
                    <div className="close-button"
                        onClick={() => onClose()}
                    >
                        <img src={times} alt="" />
                    </div>

                    <Card>
                        {children}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Modal;