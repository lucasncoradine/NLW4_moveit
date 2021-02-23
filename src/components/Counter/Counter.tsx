import React, { useEffect, useRef, useState } from 'react';
import { zeroPad } from '../../utils/Utils';
import './Counter.scss';

interface CounterProps {
    startMinutes: number
    init: boolean
}

const Counter: React.FC<CounterProps> = ({ startMinutes, init }) => {
    const [timer, setTimer] = useState(startMinutes * 60);
    const [minutes, setMinutes] = useState<string>(startMinutes.toString());
    const [seconds, setSeconds] = useState<string>('00');

    const id = useRef(1000);

    const clear = () => {
        window.clearInterval(id.current);
    };

    useEffect(() => {
        if (init) {
            id.current = window.setInterval(() => {
                if (timer > 0) {
                    let _timer = timer - 1;
                    let _minutes = Math.floor(_timer / 60);
                    let _seconds = (_timer % 60);

                    setTimer(_timer);
                    setMinutes(zeroPad(_minutes));
                    setSeconds(zeroPad(_seconds));
                }
            }, 1000);
            return () => clear();
        }

        if (timer === 0) {
            clear();
        }
    }, [timer, init]);

    return (
        <div id="counter">
            <div className="minutes">
                <span>{minutes[0]}</span>
                <span>{minutes[1]}</span>
            </div>
            <span className="separator"> : </span>
            <div className="seconds">
                <span>{seconds[0]}</span>
                <span>{seconds[1]}</span>
            </div>
        </div>
    );
};

export default Counter;