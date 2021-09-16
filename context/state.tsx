import React, { createContext, useContext, useReducer } from 'react';
import reducers from './reducers';

type errorType = {
  message: string;
  status?: number;
};

interface AppStateContextData {
  errors: errorType[];
  hideInactiveFuses: boolean;
  activeFuse?: number;
}

const initialState: AppStateContextData = {
  hideInactiveFuses: false,
  errors: [],
};

const AppStateContext = createContext<string | object>({
  state: initialState,
  dispatch: () => null,
});

type Props = { children: React.ReactNode };
export const AppWrapper = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <AppStateContext.Provider value={{ dispatch, state }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppStateContext: Function = () => useContext(AppStateContext);
