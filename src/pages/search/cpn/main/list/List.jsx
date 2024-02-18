import Item from "./Item.jsx";
import {useParams} from "react-router-dom";
import {getSearch} from "../../../../../api/search.js";

const List = () => {
    const keyword = useParams().keyword;
    const {data} = getSearch({keyword});
    return <div className={'flex'}>
        {
            data?.list.map((item,index) => {
                return <Item key={item.id} cover={item.cover} note={item.note} tag={item.tags?.[0]} />
            })
        }
    </div>
}

export default List;