import React, { createContext, useContext, useReducer } from 'react';

type SetActiveFuseAction = {
  type: string;
  payload: Object;
};

const reducer = (state: Object, action: SetActiveFuseAction) => {
  switch (action.type) {
    case 'SET_ACTIVE_FUSE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const initialState = {};
const AppDispatchContext = createContext<string | object>({
  state: initialState,
  dispatch: () => null,
});
const AppStateContext = createContext<string | object>(initialState);

export const AppWrapper: React.FC = ({ children }) => {
  let sharedState = {};
  const [state, dispatch] = useReducer(reducer, sharedState);
  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
};

export const useAppStateContext: Function = () => useContext(AppStateContext);
export const useAppDispatchContext: Function = () =>
  useContext(AppDispatchContext);
