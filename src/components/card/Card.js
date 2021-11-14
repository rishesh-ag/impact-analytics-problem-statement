import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button';
import './Card.scss';

const Card = ({candidate, hideButtons}) => {
    const {id, name, Image} = candidate;
    return (
        <div className="card-inner">
            <Link to={`/${id}`}><img className="card-image" src={Image} alt="Candidate"/></Link>
            <div className="card-info">
                <Link to={`/${id}`}><h1 className="card-info-name">{name}</h1></Link>
                {
                    !hideButtons
                    ?   (
                            <div className="card-info-cta">
                                <Button profileId={id} type='shortlist'/>
                                <Button profileId={id} type='reject'/>
                            </div>
                        )
                    : null
                }
            </div>
        </div>
    )
}

export default Card
