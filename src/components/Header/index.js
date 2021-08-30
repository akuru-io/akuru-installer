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
}){
    return(
       <Box>
           <HeaderTitle open={!title}>{title}</HeaderTitle>
           <SearchBox>
             <SearchBar 
                onSearch ={onSearch}
            />
            <DropDown />
           </SearchBox>
       </Box>
    );
}