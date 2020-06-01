import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import githubReducer from '../reducers/githubSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    github: githubReducer
  },
});
