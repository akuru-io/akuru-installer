import { useEffect, useState } from 'react';
import FontCard from '../../components/FontCard';
import {registry} from '../../utils/tempdata';
import MoreFonts from '../../components/MoreFontsCard';

import {
  Layout,
} from './styled';

export default function AllFonts() {
  const [fonts, setFontData] = useState([]);
  
  const fetchAllFonts =() =>{
    setFontData(registry);
  }

  useEffect(() => {
    fetchAllFonts();
  }, []);


  return (
    <Layout>
      {fonts.length>0 && fonts.map((font)=> (
        <FontCard 
          key={font.id}
          fontItem ={font}
        />
      ))}
      <MoreFonts/>
    </Layout>
  );
}
