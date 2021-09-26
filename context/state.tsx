import React, { createContext, useContext, useReducer } from 'react';
import reducers from './reducers';

type errorType = {
  message: string;
  status?: number;
};

interface InitialState {
  errors: errorType[];
  hideInactiveFuses: boolean;
}

const initialState: InitialState = {
  hideInactiveFuses: false,
  errors: [],
};

interface Context {
  state: {};
  dispatch: React.Dispatch<any>;
}

const AppStateContext = createContext<Context>({
  state: initialState,
  dispatch: () => null,
});

export const AppWrapper: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <AppStateContext.Provider value={{ dispatch, state }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppStateContext: Function = () => useContext(AppStateContext);
