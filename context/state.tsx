import React, { createContext, useContext, useReducer } from 'react';

const reducer = (state, action) => {
  console.log(state, 'state', action, 'action')
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        ...action.payload
      }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

const initialState = {}
const AppDispatchContext = createContext<string | object>({
  state: initialState,
  dispatch: () => null
});
const AppStateContext = createContext<string | object>(initialState);

export const AppWrapper: React.FC = ({children}) => {
  let sharedState = {}
  const [state, dispatch] = useReducer(reducer, sharedState)
  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
}

export const useAppStateContext = () => useContext(AppStateContext)
export const useAppDispatchContext = () => useContext(AppDispatchContext)