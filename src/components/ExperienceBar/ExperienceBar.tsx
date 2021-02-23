import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import './ExperienceBar.scss';

interface ExperienceBarProps {
}

const ExperienceBar: React.FC<ExperienceBarProps> = () => {
    const user = useUserContext();
    const fillValue = `${(user.level.currentExp / user.level.finalExp) * 100}%`;

    return (
        <div id="expBar">
            <span className="init-value">{`${user.level.initialExp} xp`}</span>

            <div className="bar">
                <div className="bar-bg"></div>
                <div className="bar-fill" style={{ width: fillValue }}></div>
                <span className="current-value" style={{ left: fillValue }}>
                    {user.level.currentExp > 0 && user.level.currentExp < user.level.finalExp &&
                        `${user.level.currentExp} xp`
                    }
                </span>
            </div>

            <span className="final-value">{`${user.level.finalExp} xp`}</span>
        </div>
    );
};

export default ExperienceBar;