import {getHome} from "../../api/home.js";
import Loading from "../base/loading/Loading.jsx";
import ErrorBlock from "../base/error-block/ErrorBlock.jsx";
import Header from "./cpn/header/Header.jsx";

const Home = () => {
    const {data,error,isLoading} = getHome()
    if (isLoading) return <Loading />
    if (error) return <ErrorBlock />
    return <div className={'container margin-y-auto mt-[64px] p-[20px]'}>
        <Header/>
    </div>
}

export default Home;