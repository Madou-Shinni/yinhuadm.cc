import {getHome} from "../../../../api/home.js";
import MySwiper, {InnerSwiper} from "./MySwiper.jsx";

const Slider = () => {
    const {data} = getHome();
    return <div className={'relative'}>
        <MySwiper/>
        <div className={'lg:absolute lg:top-5 lg:right-0 max-lg:hidden'}>
            <InnerSwiper/>
        </div>
    </div>
}

export default Slider;