import React, { useState } from 'react';
import './Button.scss';
import angleRight from '../../assets/icons/angle_right.svg';
import cancelIcon from '../../assets/icons/cancel.svg';
import cancelIconWhite from '../../assets/icons/cancel-white.svg';

type Theme = 'cancel' | 'start';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text?: string,
    next?: boolean,
    cancel?: boolean,
    theme?: Theme
}

const Button: React.FC<ButtonProps> = ({ children, text, theme = "start", next = false, ...buttonProps }) => {
    const [hover, setHover] = useState(false);

    return (
        <button {...buttonProps} className={`button ${theme}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {children || text}

            {next && theme === 'start' &&
                <img src={angleRight} alt="" />
            }

            {theme === 'cancel' &&
                <img src={hover ? cancelIconWhite : cancelIcon} alt="" />
            }
        </button>
    );
};

export default Button;