import {Tab, Tabs} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setActivePlayLine} from "../../../../../store/slices/detail.js";

const Header = () => {
    const activePlayLine = useSelector(state => state.detail.activePlayLine);
    const dispatch = useDispatch();
    const handleChange = (event, newValue) => {
        dispatch(setActivePlayLine(newValue));
    }
    return <div className={'flex justify-between'}>
        <h2 className={'text-2xl font-bold'}>选集播放</h2>
        <div className={'tabs'}>
            <Tabs
                value={activePlayLine}
                onChange={handleChange}
                aria-label="nav tabs example"
                role="navigation"
            >
                <Tab label="Laoz" value={2} />
                <Tab label="Bfeng" value={1} />
                <Tab label="Diff" value={3} />
            </Tabs>
        </div>
    </div>
}

export default Header;