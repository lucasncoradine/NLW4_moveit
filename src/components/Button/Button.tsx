import React from 'react';
import './Button.scss';

export type Theme = 'default' | 'info' | 'completed' | 'cancel' | 'success' | 'twitter';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text?: string,
    next?: boolean,
    cancel?: boolean,
    theme?: Theme,
    icon?: string
}

const Button: React.FC<ButtonProps> = ({ children, text, icon, theme = "start", next = false, ...buttonProps }) => {
    return (
        <button {...buttonProps} className={`button ${theme}`}>
            {children || text}

            {icon &&
                <img src={icon} alt="" />
            }
        </button>
    );
};

export default Button;