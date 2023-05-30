import React, { createContext, useEffect, useState } from 'react';
import { State } from '../Shared/interfaces/state';
import { getInitialState, persistState } from '../Utils/Persist-state';


interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}
const STORAGE_KEY = 'paris';

export const Provider = ({ children }: ProviderProps ) => {
  const initialState = getInitialState(STORAGE_KEY);

  const [ state, setState ] = useState(initialState);

  useEffect(() => {
    console.log("State changed");
    let session = localStorage.getItem(STORAGE_KEY);
    let initialState = {};
    if (session){
      initialState = JSON.parse(session ?? '{}');
      setState(initialState);
    }
  }, [])

  useEffect(() => {
    persistState(STORAGE_KEY, state);
  }, [state])

  return (
    <AppContext.Provider value={[state, setState]} >
      { children }
    </AppContext.Provider>
  )
}

export const AppContext = createContext<[
  State,
  React.Dispatch<React.SetStateAction<State>>
]>([{} as State, () => {}]);

// export const AppContext = createContext({} as State);