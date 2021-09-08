import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FontCard from '../../components/FontCard';
import MoreFonts from '../../components/MoreFontsCard';
import Header from 'components/Header'; 
import { 
  fetchAllFonts as acFetchFonts,
  setLanguage as acSetCurrentLanguage
} from 'store/reducers/fontSlice';
import {filterFonts} from '../../utils/font';


import {
  Layout,
} from './styled';

export default function AllFonts() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(null);
  const [currentLan, setCurrentLan] = useState('Language');
  const {fonts,fontCategory,currentLang}= useSelector((state) => state.fonts);
 
  const fetchFonts =() =>{
    dispatch(acFetchFonts());
  }

  const filteredFonts =filterFonts(
    fonts,
    fontCategory,
    searchQuery,
    currentLan,
  );

  useEffect(() => {
    fetchFonts();
  
  },[fonts]);

  const onSearch =(value)=>{
    setSearchQuery(value);
  };

  const onLanguageselect = (option) => {
    setCurrentLan(option);
    dispatch(acSetCurrentLanguage(option));
  };
 
  return (
    <Layout>
      <Header 
        onSearch ={onSearch}
        handleSelect={onLanguageselect}
        currentLan={currentLang}
      />
      {filteredFonts &&filteredFonts.length>0 && filteredFonts.map((font)=> (
        <FontCard 
          key={font.id}
          fontItem ={font}
          buttonText="Buy Now"
          
        />
      ))}
      <MoreFonts/>
    </Layout>
  );
};
