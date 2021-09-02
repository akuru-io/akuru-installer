export const getFontFamily=(font)=>
    font && font.familyName? font.familyName:null;

export const getVersion = (font) => 
    font && font.version? font.version:null;

export const getStyleCount = (font) =>
    font && font.fontStyles && font.fontStyles.length>0 ? 
        font.fontStyles.length :null;

export const getTag = (font) => 
    font && font.tag && font.tag.length>0 ? font.tag[0] : null;

export const getfoundry =(font) =>
    font && font.foundry ? font.foundry:null;

export const getFontImageUrl =(font) =>
    font && font.coverImageUrl? font.coverImageUrl:null;

export const getInstalledFonts= (fonts,currentLang=null)=>{

  if(currentLang && currentLang !== 'all' )
  return fonts.filter(font =>font.isInstalled === true && font.language.toLowerCase() === currentLang.toLowerCase());

  return fonts.filter(font =>font.isInstalled === true );
}

export const getFontsByLanguage= (fonts,currentLang)=>
  fonts ? fonts.filter(font =>font.language.toLowerCase() === currentLang.toLowerCase()):[];

export const getUpdatesForFonts= (fonts)=>
  fonts ? fonts.filter(font =>font.isUpdateAvailable ===true):[];


export const filterByQuery = (font,query ='') => {
  const fontName = getFontFamily(font).toLowerCase();
  return fontName.includes(query.toLowerCase()) ;
};

export const filterFonts = (fonts, fontCategory, searchQuery,currentLang=null) =>{

  var filteredFonts = fonts && fonts.length>0?fonts:[];

  if(filteredFonts && filteredFonts.length >0)
  {
    if (fontCategory === 'installed')
      filteredFonts = getInstalledFonts(filteredFonts,currentLang);
    if (fontCategory === 'updates')
      filteredFonts = getUpdatesForFonts(getInstalledFonts(filteredFonts,currentLang));
    if (fontCategory === 'all'&& currentLang)
      filteredFonts = getFontsByLanguage(filteredFonts,currentLang);
    if (searchQuery)
      filteredFonts =filteredFonts.filter(font =>filterByQuery(font,searchQuery));
  }
    return filteredFonts;
};

export const  languages = [
    {
      "id":1,
      "name":'All'
    },
    {
      "id":2,
      "name":'Sinhala'
    },
    {
      "id":3,
      "name":'Tamil'
    }
  ];