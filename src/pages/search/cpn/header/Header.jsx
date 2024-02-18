import {getSearch} from "../../../../api/search.js";
import {useParams} from "react-router-dom";

const Header = () => {
    const keyword = useParams().keyword;
    const {data} = getSearch({keyword});
    return <div className={'w-full pb-[10px] mb-[10px] border-b border-solid border-[#e9ecef]'}>
        <h1 className={'text-2xl'}>搜索<em className={'text-pink-500'}>{`"${keyword}"`}</em>，找到<em className={'text-pink-500'}>{data?.total}</em>部影片</h1>
    </div>
}

export default Header;