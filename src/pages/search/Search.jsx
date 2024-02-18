import Header from "./cpn/header/Header.jsx";
import Main from "./cpn/main/Main.jsx";
import {getSearch} from "../../api/search.js";
import Loading from "../base/loading/Loading.jsx";
import ErrorBlock from "../base/error-block/ErrorBlock.jsx";
import {useParams} from "react-router-dom";

const Search = () => {
    const keyword = useParams().keyword;
    const {data,isLoading,error} = getSearch({keyword});
    if (isLoading) return <Loading />;
    if (error) return <ErrorBlock/>;
    // console.log(data)
    return <div className={'container margin-y-auto mt-[64px] p-[20px]'}>
        <Header />
        <Main />
    </div>
}

export default Search;