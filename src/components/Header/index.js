import SearchBar from 'components/SearchBar';
import DropDown from'components/DropDown';
import {
    Box,
    HeaderTitle,
    SearchBox,
} from './styled';

export default function Header({
    title,
    onSearch,
    searchEnabled = true,
    handleSelect,
    currentLan,
}){
    return(
       <Box>
           <HeaderTitle open={!title}>{title}</HeaderTitle>
           {searchEnabled &&(
            <SearchBox>
                <SearchBar 
                    onSearch ={onSearch}
                />
                <DropDown 
                    handleSelect ={handleSelect}
                    currentLan={currentLan}
                />
            </SearchBox>
           )}
       </Box>
    );
}