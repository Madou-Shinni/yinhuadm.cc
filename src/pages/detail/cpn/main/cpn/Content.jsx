import {useNavigate, useParams} from "react-router-dom";
import {getVideo} from "../../../../../api/detail.js";
import {useSelector} from "react-redux";

const Content = () => {
    const {id} = useParams();
    const {data} = getVideo({id});
    const activePlayLine = useSelector(state => state.detail.activePlayLine);
    const navigate = useNavigate();

    const onClick = (v) => {
        navigate(`/play/${id}/${v.playLine}/${v.episode}`)
    }

    return <div className={`flex p-[20px] gap-[10px] flex-wrap bg-white rounded-[8px]`}>
        {data?.episodeList?.map((item, index) => {
            return <div
                key={index}
                className={`episode border border-solid border-[#e9ecef] py-[2px] px-[8px] rounded-[8px] cursor-pointer
                text-center text-l text-[#333] hover:bg-[#f5f5f5] hover:text-[#333] transition-all duration-300 ease-in-out
                w-[79px] h-[30px] ${item.playLine === activePlayLine ? '' : 'hidden'}`
            }
               onClick={() => onClick(item)}
            >
                <span>第{item.episode}集</span>
            </div>
        })}
    </div>
}

export default Content;