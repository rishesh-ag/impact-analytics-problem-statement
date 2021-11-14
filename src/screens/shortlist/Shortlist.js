import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { reject, selectCandidateList, shortlist } from '../../reducers/candidate';

const Shortlist = () => {
    const {id, type} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const list = useSelector(selectCandidateList);
    useEffect(() => {
        type === 'shortlist' ? dispatch(shortlist({id, list})) : dispatch(reject({id, list}));
        navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, id]);
    return null;
}

export default Shortlist;
