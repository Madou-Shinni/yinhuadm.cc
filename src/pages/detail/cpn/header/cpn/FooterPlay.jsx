import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import {useNavigate, useParams} from "react-router-dom";
import {getVideo} from "../../../../../api/detail.js";

const FooterPlay = () => {
    const {id} = useParams();
    const {data} = getVideo({id});
    const navigate = useNavigate();

    const onClick = () => {
        const {episode,playLine}  = data?.episodeList?.[0]
        navigate(`/play/${id}/${playLine}/${episode}`)
    }

    return <>
        <a className={'bg-[#f78ca0] p-[10px] rounded-[8px] text-white cursor-pointer'}
              onClick={onClick}
        >
            <PlayArrowRoundedIcon/>
            <span>立即播放</span>
        </a>
    </>
}

export default FooterPlay;