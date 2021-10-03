import { useEffect, useState } from 'react';
import Header from 'components/Header';
import FontCard from '../../components/FontCard';
import PopUp from '../../components/PopUp';
import {registry} from '../../utils/tempdata';

import {
    Layout,
} from './styled';

export default function PremiumFonts(){
    const [fonts, setFontData] = useState([]);
    const [show, setShow] = useState(false);
    const title = 'Premium Fonts';

    const fetchPremiumFonts =() =>{
        setFontData(registry);
      }
    
      useEffect(() => {
        fetchPremiumFonts();
      }, []);

      const onClick= () =>{
        setShow(true);
        
        
      }
      const popUpOnClick=() =>{
        setShow(false);
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
                    onClickButton ={() =>onClick()}
                />
            ))}
            {show &&(
                <PopUp 
                isShow ={show}
                popUpOnclick={() =>popUpOnClick()}
                />
            )}
        </Layout>
    );
}