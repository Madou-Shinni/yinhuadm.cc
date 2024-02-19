import Item from "./Item.jsx";
import {useParams} from "react-router-dom";
import {getSearchInfinite} from "../../../../../api/search.js";
import Loading from "../../../../base/loading/Loading.jsx";
import ErrorBlock from "../../../../base/error-block/ErrorBlock.jsx";
import {setTotal} from "../../../../../store/slices/search.js";
import {useDispatch} from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import {useEffect} from "react";

const List = () => {
    const keyword = useParams().keyword;
    const dispatch = useDispatch();
    const {data,size,setSize,isValidating,isLoading,error} = getSearchInfinite({keyword});

    useEffect(()=>{
        if (data) {
            dispatch(setTotal(data?.[0].total));
        }
    },[data])

    const loadFunc = async () => {
        dispatch(setTotal(data?.[0].total));
        if (isValidating) return;
        await setSize(size + 1);
    }

    const hasMore = data?.[0]?.total / 10 > data?.length;

    if (isLoading) return <Loading />;
    if (error) return <ErrorBlock/>;

    return <div className={'flex justify-center items-center mt-[30px]'}>
            <InfiniteScroll
                className={'flex flex-wrap gap-[10px] justify-start max-sm:justify-center'}
                pageStart={0}
                loadMore={loadFunc}
                hasMore={hasMore}
                loader={<Loading className={'mt-[10px] h-[10px!important]'} key={0} />}
            >
                <div className={'flex flex-col gap-y-[50px] justify-center'}>
                    {
                        data?.map((videos,index) => {
                            return videos?.list?.map((item,index) => {
                                return <Item key={item.id} id={item.id} cover={item.cover} note={item.note} tag={item.tags?.[0]} title={item.title} introduction={item.introduction} />
                            })
                        })
                    }
                </div>
            </InfiniteScroll>
    </div>
}

export default List;
