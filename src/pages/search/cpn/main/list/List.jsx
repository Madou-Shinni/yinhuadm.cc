import Item from "./Item.jsx";
import {useParams} from "react-router-dom";
import {getSearch} from "../../../../../api/search.js";

const List = () => {
    const keyword = useParams().keyword;
    const {data} = getSearch({keyword});
    return <div className={'flex flex-wrap gap-[10px] justify-start max-sm:justify-center'}>
        {
            data?.list?.map((item,index) => {
                return <Item key={item.id} id={item.id} cover={item.cover} note={item.note} tag={item.tags?.[0]} title={item.title} introduction={item.introduction} />
            })
        }
    </div>
}

export default List;
