import React, { createContext, useContext, useReducer } from 'react';

type activeFusePayload = {
  activeFuse: number;
  hideInactiveFuses?: boolean;
};

type SetActiveFuseAction = {
  type: string;
  payload: activeFusePayload;
};

const reducer = (state: Object, action: SetActiveFuseAction) => {
  switch (action.type) {
    case 'SET_ACTIVE_FUSE':
      return {
        ...state,
        ...action.payload,
        errors: [],
      };

    case 'SET_EMPTY_FUSE':
      return {
        ...state,
        ...action.payload,
        errors: [
          {
            message: `No fuses were found for fuse number ${action.payload.activeFuse}. Note: fuses 1-4, 16-21 are empty as standard and 71 is the highest fuse.`,
          },
        ],
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const initialState = { hideInactiveFuses: false, errors: [] };
const AppDispatchContext = createContext<string | object>({
  state: initialState,
  dispatch: () => null,
});
const AppStateContext = createContext<string | object>(initialState);

type Props = { children: React.ReactNode };
export const AppWrapper = ({ children }: Props) => {
  let sharedState = {};
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
};

export const useAppStateContext = () => useContext(AppStateContext);
export const useAppDispatchContext: Function = () =>
  useContext(AppDispatchContext);
