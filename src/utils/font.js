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