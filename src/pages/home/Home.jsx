import Header from "../base/header/Header.jsx";
import {getHome} from "../../api/home.js";
import Loading from "../base/loading/Loading.jsx";
import ErrorBlock from "../base/error-block/ErrorBlock.jsx";

const Home = () => {
    const {data,error,isLoading} = getHome()
    if (isLoading) return <Loading />
    if (error) return <ErrorBlock />
    return <div className={'container'}>
        <Header />
    </div>
}

export default Home;