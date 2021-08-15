import { useEffect, useState } from 'react';
import Header from 'components/Header';
import FontCard from '../../components/FontCard';
import {registry} from '../../utils/tempdata';

import {
    Layout,
} from './styled';

export default function PremiumFonts(){
    const [fonts, setFontData] = useState([]);
    const title = 'Premium Fonts';

    const fetchPremiumFonts =() =>{
        setFontData(registry);
      }
    
      useEffect(() => {
        fetchPremiumFonts();
      }, []);

      const onClick= () =>{
        console.log('clicked');
        //Todo write method
      }

    return(
        <Layout>
            <Header title ={title}/>
            {fonts.length>0 && fonts.map((font)=> (
                <FontCard 
                    key={font.id}
                    fontItem ={font}
                    toggleEnabled ={false}
                    buttonText = 'Buy Now'
                    onClick ={onClick}
                />
            ))}
        </Layout>
    );
}