const initialState: AppState = {
  isAppLoaded: false,
};

export type AppState = {
  isAppLoaded: boolean;
};

const appState = (state = initialState, action: any) => {
  switch (action.type) {
    // case IS_APP_LANGUAGE_READY:
    //   return {
    //     ...state,
    //     isAppLanguageLoaded:true
    //   };
    default:
      return state;
  }
};
export default appState;
