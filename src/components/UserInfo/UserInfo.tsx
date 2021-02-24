import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import iconLevel from '../../assets/icons/arrow-up.svg';
import './UserInfo.scss';

interface UserInfoProps {

}

const UserInfo: React.FC<UserInfoProps> = () => {
    const user = useUserContext();

    return (
        <div id="userInfo">
            <div className="user-avatar">
                <img src={user.avatar} alt="" />
            </div>

            <div className="user-description">
                <div className="user-name">{user.name} {user.lastName}</div>

                <div className="user-level">
                    <img src={iconLevel} alt="Level" />
                    <span>Level {user.level.value}</span>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;