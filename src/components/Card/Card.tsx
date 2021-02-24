import React from 'react';
import './Card.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {

}

interface CardFooterProps {

}

interface CardHeaderProps {

}

interface CardBodyProps {

}

const Card: React.FC<CardProps> = ({ children, ...divProps }) => {
    return (
        <div {...divProps} className="card">
            {children}
        </div>
    );
};

export const CardHeader: React.FC<CardHeaderProps> = ({children}) => {
    return (
        <div className="card-header">
            {children}
        </div>
    )
}

export const CardBody: React.FC<CardBodyProps> = ({children}) => {
    return (
        <div className="card-body">
            {children}
        </div>
    )
}

export const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
    return (
        <div className="card-footer">
            {children}
        </div>
    )
}

export default Card;