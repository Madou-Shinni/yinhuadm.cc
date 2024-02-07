import {useParams} from "react-router-dom";
import {getVideo} from "../../../../../api/detail.js";

const Cover = () => {
    const {id} = useParams();
    const {data} = getVideo({id});

    return <div className={'cover rounded-[8px] float-right pr-[20px]'}>
        <img src={data?.cover} alt={data?.title} className={'w-[220px] h-full object-cover rounded-[8px]'}/>
    </div>
}

export default Cover;