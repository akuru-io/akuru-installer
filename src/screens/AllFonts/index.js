import { useEffect, useState } from 'react';
import FontCard from '../../components/FontCard';
import {registry} from '../../utils/tempdata';

//import './styles.css';
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
      {fonts.length>0 && fonts.map((font, index) => (
        <FontCard 
          key={index}
          fontItem ={font}
        />
      ))}
    </Layout>
  );
}
