const CANDIDATE_API_URL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json';

export const getCandidateList = async ()  => {
    const candidatesList = await fetch(CANDIDATE_API_URL);
    return candidatesList.json();
}