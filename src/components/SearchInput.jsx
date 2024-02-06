import {Input} from "@mui/material";

const SearchInput = (props) => {
    return <div className={props.className}>
        <Input fullWidth autoFocus type={'search'} value={props.value} disableUnderline placeholder={props.placeholder} />
    </div>
}

export default SearchInput;