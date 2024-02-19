import styles from './Item.module.scss';
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded.js";
import {useNavigate} from "react-router-dom";

const Item = (props) => {
    const navigate = useNavigate();
    const onPlay = () => {
        // 目前默认线路2剧集1
        navigate(`/play/${props.id}/2/1`)
    }

    const onDetail = () => {
        navigate(`/video/${props.id}`)
    }

    return <div className={`
    relative
    w-[calc(15%-10px)]
    max-2xl:w-[calc(30%-10px)]
    max-xl:w-[calc(45%-10px)]
    max-lg:w-[calc(60%-10px)]
    max-md:w-[calc(85%-10px)]
    max-sm:w-[calc(100%-10px)]
    bg-[#fff] rounded-[8px] shadow p-[10px] min-w-[250px] mb-[50px]`}>
        {/* tag */}
        <div className={`absolute right-0 top-[-25px] h-[40px] leading-[26px] text-s text-[#616161] bg-[#e9ecef] font-bold rounded-[8px] ${styles.tag}`}
            style={{
                padding: '0 10px 0 2px',
            }}
        >
            {props.tag}
        </div>
        {/*img*/}
        <a className={'float-left w-[120px] relative'} style={{
            margin: '-45px 0 10px 0', // 左上角
            marginRight: '10px'
        }}>
            <div className={'relative  pt-[140%]'}>
                <div className={'note absolute left-0 bottom-0 right-0 z-10 text-white text-center text-s'}>{props.note}</div>
                <div className={'cover w-full h-full'}>
                    <img src={props.cover} alt="" className={'object-cover absolute top-0 left-0 rounded-[14px]'}/>
                </div>
            </div>
        </a>
        {/*content*/}
        <div className={'content-wrapper h-full flex flex-col'}>
            <div className={'title text-2xl font-bold text-nowrap overflow-hidden'}>{props.title}</div>
            <div className={'content text-m text-gray-400 two-lines-ellipsis'}>{props.introduction}</div>
            <div className={'button mt-auto flex gap-[10px]'}>
                <a className={'bg-[#f78ca0] rounded-[8px] px-[3px] py-[5px] text-center text-[#fff] cursor-pointer'}
                    onClick={onPlay}
                >
                    <PlayArrowRoundedIcon/>
                    <span className={'2xl:hidden max-sm:hidden'}>立即播放</span>
                </a>
                <a className={'border border-solid border-[#f78ca0] px-[10px] py-[5px] rounded-[8px] cursor-pointer'}
                    onClick={onDetail}
                >
                    <span>详情</span>
                </a>
            </div>
        </div>
    </div>
}

export default Item;
