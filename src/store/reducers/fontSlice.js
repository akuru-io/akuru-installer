import { createSlice } from '@reduxjs/toolkit';
import {registry} from '../../utils/tempdata';

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
        setError(state, { payload }) {
            state.errors = payload;
            state.isLoading = false;
        },
    },

});

export const {setIsLoading,fontFetched,setError,setFontCategory,setCurrentLanguage}= fontSlice.actions;

export const fetchAllFonts =
  (cb = () => {}) =>
   (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        // TODO fetch method 
      dispatch(fontFetched(registry));
      cb(null, registry);
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


  export default fontSlice.reducer;