
import {SearchInput,SearchIcon} from './styled'

export default function SearchBar({
  onSearch,
}){

    return (
        <>
    <SearchIcon />
      <SearchInput 
       
       key="random1"
       //value={keyword}
       //placeholder= 
       onChange={(e) => onSearch(e.target.value)}
      />
      </>
    );
  }