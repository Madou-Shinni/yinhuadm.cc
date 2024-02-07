import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import {useDispatch, useSelector} from "react-redux";
import {setActiveWeekday} from "../../../../store/slices/home.js";
import {useNavigate} from "react-router-dom";

const Tab = (props) => {
    const weekday = useSelector(state => state.home.activeWeekday);
    let ok = props.children === weekday;
    const active = 'text-pink-300 bg-white';
    return <div className={`hover:text-pink-300 hover:bg-white rounded-[8px] px-[5px] ${ok ? active : ''}`}
        onClick={props.onClick}
    >
        <h3 className={'text-m'}>{props.children}</h3>
    </div>
}

const Tabs = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onWeekday = (weekday) => {
        dispatch(setActiveWeekday(weekday));
    }

    const onMore = () => {
        navigate('/more');
    }

    return <div className={'flex gap-[10px] leading-[34px] text-[#616161] cursor-pointer p-[6px]'}>
        {props.tabs ? props.tabs?.map((item, index) => (
            <Tab key={index} onClick={() => onWeekday(item)}>
                {item}
            </Tab>
        )) : <Tab onClick={onMore}>
                更多
                <NavigateNextRoundedIcon/>
            </Tab>
        }
    </div>
}

export default Tabs;