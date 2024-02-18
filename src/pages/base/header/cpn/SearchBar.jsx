import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import {InputBase} from "@mui/material";
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const [focus, setFocus] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate();
    const onSearch = (value) => {
        navigate(`/search/${value}`)
    }
    const onFocus = () => {
        setFocus(true)
    }

    const onBlur = () => {
        setFocus(false)
    }

    const onChange = (e) => {
        setInputValue(e.target.value)
    }

    return <div className={`relative px-[20px] container h-[45px] rounded-[8px] hover:bg-gray-200 ${focus ? 'bg-gray-200' : ''}`}>
        <InputBase onKeyDown={()=>onSearch(inputValue)} onFocus={onFocus} onBlur={onBlur} onChange={onChange} className={'absolute top-1/2 -translate-y-1/2 w-full h-full'} placeholder={'Search'} />
        <div className={`absolute top-1/2 -translate-y-1/2 right-2 w-[36px] h-[36px] flex items-center justify-center cursor-pointer
            rounded-[8px] ${focus ? 'bg-white' : ''}
        `}>
            <SearchIcon onClick={()=>onSearch(inputValue)} />
        </div>
    </div>
}

export default SearchBar;