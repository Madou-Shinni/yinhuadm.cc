import {getHome} from "../../../../api/home.js";
import MySwiper from "./MySwiper.jsx";

const Slider = () => {
    const {data} = getHome();
    return <div className={'relative'}>
        <MySwiper/>
    </div>
}

export default Slider;