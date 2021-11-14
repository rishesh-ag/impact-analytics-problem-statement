import { createSlice } from '@reduxjs/toolkit'

export const candidateSlice = createSlice({
  name: 'candidate',
  initialState: {
    list: null,
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload.map((item => {
        return {...item, shortlist: false, reject: false}
      }));
    },
    shortlist: (state, action) => {
      state.list = action.payload.list.map((item) => action.payload.id === item.id ? {...item, shortlist: true} : item);
    },
    reject: (state, action) => {
      state.list = action.payload.list.map((item) => action.payload.id === item.id ? {...item, reject: true} : item);
    }
  },
})

export const { setList, shortlist, reject } = candidateSlice.actions;
export const selectCandidateList = state => state.candidate.list;
export const selectCandidate = (state, id) => {
    const _candidate = state.candidate.list.filter((candidate) => candidate.id === id);
    return _candidate[0];
};
export default candidateSlice.reducer;