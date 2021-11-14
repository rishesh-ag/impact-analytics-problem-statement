import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import Card from '../../components/card/Card';
import { selectCandidate } from '../../reducers/candidate';
import './profile.scss';

const Profile = () => {
    const {id} = useParams();
    const candidate = useSelector(state => selectCandidate(state, id));
    const hideButtons = candidate.shortlist || candidate.reject;
    return <div className="profile"><Card candidate={candidate} hideButtons={hideButtons}/></div>
}

export default Profile
