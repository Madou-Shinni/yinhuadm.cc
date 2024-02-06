import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import {InputBase} from "@mui/material";

const SearchBar = () => {
    const [focus, setFocus] = useState(false)
    const onSearch = () => {
        console.log('search')
    }
    const onFocus = () => {
        setFocus(true)
    }

    const onBlur = () => {
        setFocus(false)
    }

    return <div className={'relative px-[20px] container h-[45px] rounded-[8px] hover:bg-gray-200'}>
        <InputBase onFocus={onFocus} onBlur={onBlur} className={'absolute top-1/2 -translate-y-1/2 w-full h-full'} placeholder={'Search'} />
        <div className={`absolute top-1/2 -translate-y-1/2 right-2 w-[40px] h-[40px] flex items-center justify-center cursor-pointer
            rounded-[8px] ${focus ? 'bg-white' : ''}
        `}>
            <SearchIcon onClick={onSearch} />
        </div>
    </div>
}

export default SearchBar;