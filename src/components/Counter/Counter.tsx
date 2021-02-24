import React, { useEffect, useRef, useState } from 'react';
import angleRight from '../../assets/icons/angle_right.svg';
import cancel from '../../assets/icons/cancel.svg';
import checkCircle from '../../assets/icons/check_circle.svg';
import { useChallengeContext } from '../../contexts/ChallangeContext';
import { formatSeconds } from '../../utils/Utils';
import Button, { Theme } from '../Button/Button';
import './Counter.scss';

interface CounterProps {
    startSeconds: number,
    onCompleteCallback?: Function,
    restart?: boolean
}

const Counter: React.FC<CounterProps> = ({ startSeconds, onCompleteCallback }) => {
    const challenge = useChallengeContext();
    const [timer, setTimer] = useState(startSeconds);
    const [formatedTimer, setFormatedTimer] = useState(formatSeconds(startSeconds));
    const [buttonText, setButtonText] = useState<string>('Iniciar um ciclo');
    const [buttonTheme, setButtonTheme] = useState<Theme>('info');
    const [buttonIcon, setButtonIcon] = useState<string>(angleRight);
    const [initCount, setInitCount] = useState<boolean>(false);

    const timerPercent = ((timer - startSeconds) * -1) / startSeconds * 100;

    const handleClick = () => {
        if (timerPercent !== 100) {
            if (initCount) {
                setButtonText('Iniciar um ciclo');
                setButtonTheme('info');
                setButtonIcon(angleRight)
            } else {
                setButtonText('Abandonar ciclo');
                setButtonTheme('default');
                setButtonIcon(cancel);
            }

            setInitCount(!initCount);
        }
    }

    const id = useRef(1000);

    const clear = () => {
        window.clearInterval(id.current);
    };

    useEffect(() => {
        if (initCount) {
            id.current = window.setInterval(() => {
                if (timer > 0) {
                    let _timer = timer - 1;

                    setTimer(_timer);
                    setFormatedTimer(formatSeconds(_timer));
                }
            }, 1000);
            return () => clear();
        }

        if (timer === 0) {
            clear();
        }
    }, [timer, initCount]);

    useEffect(() => {
        if (timerPercent === 100) {
            setButtonIcon(checkCircle);
            setButtonTheme('completed');
            setButtonText('Ciclo encerrado');

            if (onCompleteCallback !== undefined) {
                onCompleteCallback();
            }
        }
    }, [timerPercent]);

    useEffect(() => {
        if (challenge.completed) {
            setButtonIcon(angleRight);
            setButtonTheme('info');
            setButtonText('Iniciar um ciclo');
            setInitCount(false);
            setTimer(startSeconds);
            setFormatedTimer(formatSeconds(startSeconds));
        }
    }, [challenge.completed]);

    return (
        <div id="counter">
            <div className="counter-container">
                <div className="minutes">
                    <span>{formatedTimer.format[0]}</span>
                    <span>{formatedTimer.format[1]}</span>
                </div>
                <span className="separator"> : </span>
                <div className="seconds">
                    <span>{formatedTimer.format[3]}</span>
                    <span>{formatedTimer.format[4]}</span>
                </div>
            </div>

            <div className="button-container">
                <Button
                    theme={buttonTheme}
                    text={buttonText}
                    icon={buttonIcon}
                    onClick={() => handleClick()}
                />

                {initCount &&
                    <div className="button-progress-bar" style={{ width: `${timerPercent}%` }}></div>
                }
            </div>
        </div>
    );
};

export default Counter;