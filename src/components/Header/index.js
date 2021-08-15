import {
    Box,
    HeaderTitle,
} from './styled';

export default function Header({
    title,
}){
    return(
       <Box>
           <HeaderTitle open={!title}>{title}</HeaderTitle>
       </Box>
    );
}