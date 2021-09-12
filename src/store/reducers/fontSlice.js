import { createSlice } from '@reduxjs/toolkit';
import { fetchAll } from 'api/fonts';


export const fontSlice = createSlice({
    name:'font',initialState:{
        loading:null,
        fonts:[],
        currentLang:'Language',
        fontCategory:null,
        error:null,
    },
    reducers:{
        setIsLoading(state, { payload }) {
            state.errors = null;
            state.isLoading = payload;
        },
        fontFetched(state, { payload }) {
            state.fonts = payload;
            state.errors = null;
            state.isLoading = false;
        },
        setFontCategory(state,{payload}){
          state.fontCategory =payload;
        },
        setCurrentLanguage(state,{payload}){
          state.currentLang = payload;
        },
        setInstallation(state,{payload}){
          const index = state.fonts.findIndex(f => f.id === payload.id);
          const fonts = state.fonts
          fonts[index] = {
            ...fonts[index],
            isInstalled:true};
          state.fonts = fonts;
        },
        setError(state, { payload }) {
            state.errors = payload;
            state.isLoading = false;
        },
    },

});

export const {setIsLoading,fontFetched,setError,setFontCategory,setCurrentLanguage,setInstallation}= fontSlice.actions;

export const fetchAllFonts =
   (cb = () => {}) =>
  async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const response = await fetchAll ();
      dispatch(fontFetched(response[0]));
      cb(null, response);
    } catch (err) {
      dispatch(setError(err));
      cb(err, null);
    }
  };

  export const setCurrentFontCategory =
  (type, cb = () => {}) =>
   (dispatch) => {
      dispatch(setFontCategory(type));
      cb(null, type);
  };

  export const setLanguage=
  (lang,cb = () => {}) =>
   (dispatch) => {
      dispatch(setCurrentLanguage(lang));
      cb(null, lang);
  };

  export const updateFont=
  (item,cb = () => {}) =>
   (dispatch) => {
     
      dispatch(setInstallation(item));
      cb(null, item);
  };

  export default fontSlice.reducer;