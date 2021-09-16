type activeFusePayload = {
  activeFuse: number;
  hideInactiveFuses?: boolean;
};

type setActiveFuseActionType = {
  type: string;
  payload: activeFusePayload;
};

const reducers = (state: Object, action: setActiveFuseActionType): object => {
  switch (action.type) {
    case 'RESET_ACTIVE_FUSE':
      return {
        ...state,
        ...action.payload,
        errors: [],
      };

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

export default reducers;
