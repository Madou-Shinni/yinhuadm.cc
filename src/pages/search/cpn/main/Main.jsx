import List from "./list/List.jsx";
import {useMediaQuery} from "@mui/material";
import ListInfinite from "./list/ListInfinite.jsx";

const Main = () => {

    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return <div className={'w-full p-[10px]'}>
        {isSmallScreen ? <ListInfinite/> : <List/>}
    </div>
}

export default Main;
