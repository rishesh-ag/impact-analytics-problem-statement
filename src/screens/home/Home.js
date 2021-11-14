import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../../components/card/Card';
import { selectCandidateList } from '../../reducers/candidate';
import './Home.scss';
import { FaSearch } from "react-icons/fa";

const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const [candidatesList, setCandidatesList] = useState(null);
    const list = useSelector(selectCandidateList);
    useEffect(()  => {
        setCandidatesList(list);
    }, [list]);

    const renderCandidates = (candidates, title = null) => {
        return candidates.length 
            ?   (
                    <>
                        {title && <h1 className="heading">{title}</h1>}
                        <div className="card">
                            {candidates.map(candidate => <Card key={candidate.id} candidate={candidate} hideButtons={!!title}/>)}
                        </div>
                    </>
                ) 
            : null;
    }

    const renderHome = () => {
        const updatedCandidateList = searchValue === "" ? candidatesList : candidatesList.filter(candidate => {
            const name = candidate.name.toLowerCase()
            return name.includes(searchValue.toLowerCase());
        });
        let shorlistedCandidates = [];
        let rejectedCandidates = [];
        let remaningCandidates = [];
        updatedCandidateList.forEach(candidate => {
            if(candidate.shortlist) shorlistedCandidates = [...shorlistedCandidates, candidate];
            else if(candidate.reject) rejectedCandidates = [...rejectedCandidates, candidate];
            else remaningCandidates = [...remaningCandidates, candidate];
        });

        return (
            <div className="home">
                <div className="serach-bar">
                    <input type='text' value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
                    <FaSearch color="#E59934" className="search-icon" size='25px'/>
                </div>

                {renderCandidates(remaningCandidates)}
                {renderCandidates(shorlistedCandidates, "Shorlisted Candidates")}
                {renderCandidates(rejectedCandidates, "Rejected Candidates")}
                
            </div>
        );
    }

    return candidatesList ? renderHome() : null;
}

export default Home
