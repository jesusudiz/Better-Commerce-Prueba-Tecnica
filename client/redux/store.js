import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './charactersSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer
  },
  devTools: true 
});

export default store;
