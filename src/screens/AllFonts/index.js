import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FontCard from '../../components/FontCard';
import MoreFonts from '../../components/MoreFontsCard';
import Header from 'components/Header'; 
import { fetchAllFonts as acFetchFonts } from 'store/reducers/fontSlice';
import {filterFonts} from '../../utils/font';

import {
  Layout,
} from './styled';

export default function AllFonts() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(null);
  const {fonts,fontCategory,currentLang}= useSelector((state) => state.fonts);
 
  const fetchAllFonts =() =>{
    dispatch(acFetchFonts());
  }

  const filteredFonts =filterFonts(
    fonts,
    fontCategory,
    searchQuery,
    currentLang,
  );

  useEffect(() => {
    fetchAllFonts();
  },[fonts]);

  const onSearch =(value)=>{
    setSearchQuery(value);
  };
 
  return (
    <Layout>
      <Header 
        onSearch ={onSearch}
      />
      {filteredFonts &&filteredFonts.length>0 && filteredFonts.map((font)=> (
        <FontCard 
          key={font.id}
          fontItem ={font}
        />
      ))}
      <MoreFonts/>
    </Layout>
  );
};
