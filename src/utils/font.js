export const getFontFamily=(font)=>
    font && font.familyName? font.familyName:null;

export const getVersion = (font) => 
    font && font.version? font.version:null;

export const getStyleCount = (font) =>
    font && font.fontStyles && font.fontStyles.length>0 ? 
        font.fontStyles.length :null;

export const getTag = (font) => 
    font && font.tags && font.tags.length>0 ? font.tags[0] : null;

export const getfoundry =(font) =>
    font && font.foundry ? font.foundry:null;

export const getFontImageUrl =(font) =>
    font && font.coverImageUrl? font.coverImageUrl:null;

export const getInstalledFonts= (fonts,currentLan=null)=>{

  if(currentLan && currentLan !== 'Language' )
  return fonts.filter(font => font.language && font.isInstalled === true && font.language.toLowerCase() === currentLan.toLowerCase());

  return fonts.filter(font =>font.isInstalled === true );
}

export const getFontsByLanguage= (fonts,currentLan)=>
  fonts && fonts.some(font => font.language)? fonts.filter(font =>font.language.toLowerCase() === currentLan.toLowerCase()):[];

export const getUpdatesForFonts= (fonts)=>
  fonts && fonts.some(font => font.isUpdateAvailable)? fonts.filter(font =>font.isUpdateAvailable ===true):[];


export const filterByQuery = (font,query ='') => {
  const fontName = getFontFamily(font).toLowerCase();
  return fontName.includes(query.toLowerCase()) ;
};

export const filterFonts = (fonts, fontCategory, searchQuery,currentLan=null) =>{
  var filteredFonts = fonts && fonts.length>0?fonts:[];

  if(filteredFonts && filteredFonts.length >0)
  {
    if (fontCategory === 'installed')
      filteredFonts = getInstalledFonts(filteredFonts,currentLan);
    if (fontCategory === 'updates')
      filteredFonts = getUpdatesForFonts(getInstalledFonts(filteredFonts,currentLan));
    if (fontCategory == null && currentLan !== 'Language')
      filteredFonts = getFontsByLanguage(filteredFonts,currentLan);
    if (searchQuery)
      filteredFonts =filteredFonts.filter(font =>filterByQuery(font,searchQuery));
  }
    return filteredFonts;
};

export const isInstalledFont=(fontItem)=>
  fontItem && fontItem.isInstalled? fontItem.isInstalled:false;

export const  languages = [
    {
      "id":1,
      "name":'Sinhala'
    },
    {
      "id":2,
      "name":'Tamil'
    }
  ];