import {Tab, Tabs} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setActivePlayLine} from "../../../../../store/slices/detail.js";

const Header = () => {
    const activePlayLine = useSelector(state => state.detail.activePlayLine);
    const dispatch = useDispatch();
    const handleChange = (event, newValue) => {
        dispatch(setActivePlayLine(newValue));
    }
    return <div className={'flex justify-between mt-[10px]'}>
        <h2 className={'text-m font-bold'}>选集播放</h2>
        <div className={'tabs'}>
            <Tabs
                value={activePlayLine}
                onChange={handleChange}
                aria-label="nav tabs example"
                role="navigation"
            >
                <Tab label="Laoz" value={2} style={{padding:'10px',minWidth:'30px'}} />
                <Tab label="Bfeng" value={1} style={{padding:'10px',minWidth:'30px'}} />
                <Tab label="Diff" value={3} style={{padding:'10px',minWidth:'30px'}} />
            </Tabs>
        </div>
    </div>
}

export default Header;