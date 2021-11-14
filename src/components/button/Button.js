import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss';

const Button = ({profileId, type}) => {
    return (
        <Link to={`/${profileId}/${type}`}><button className={type}>{type.toUpperCase()}</button></Link>
    );
}

export default Button
