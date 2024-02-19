import Item from "./Item.jsx";
import {useParams} from "react-router-dom";
import {getSearch} from "../../../../../api/search.js";
import {Pagination, useMediaQuery} from "@mui/material";
import {useEffect, useState} from "react";
import Loading from "../../../../base/loading/Loading.jsx";
import ErrorBlock from "../../../../base/error-block/ErrorBlock.jsx";
import {setTotal} from "../../../../../store/slices/search.js";
import {useDispatch} from "react-redux";

const List = () => {
    const keyword = useParams().keyword;
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const {data,isLoading,error,mutate} = getSearch({keyword:keyword,pageNum:page,pageSize:10});
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

    useEffect(() => {
        dispatch(setTotal(data?.total));
        mutate()
        window.scrollTo(0, 0);
    }, [page]);

    if (isLoading) return <Loading />;
    if (error) return <ErrorBlock/>;

    const handlePageChange = (e,value) => {
        setPage(value);
    };

    return <div className={'flex flex-col justify-center items-center'}>
        <div className={'flex flex-wrap gap-[10px] justify-start mt-[30px] max-sm:justify-center'}>
            {
                data?.list?.map((item,index) => {
                    return <Item key={item.id} id={item.id} cover={item.cover} note={item.note} tag={item.tags?.[0]} title={item.title} introduction={item.introduction} />
                })
            }
        </div>
        <Pagination count={Math.ceil(data?.total / 10)}
                    page={page}
                    onChange={handlePageChange}
                    size={isSmallScreen ? 'small' : 'medium'}
                    defaultPage={1}
                    siblingCount={isSmallScreen ? 0 : 2}
                    boundaryCount={1}
                    showFirstButton
                    showLastButton />
    </div>
}

export default List;
