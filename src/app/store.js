import { configureStore } from '@reduxjs/toolkit'
import candidateReducer from '../reducers/candidate'

export default configureStore({
  reducer: {
    candidate: candidateReducer,
  },
});