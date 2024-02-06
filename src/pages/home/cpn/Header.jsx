import {Swiper} from "swiper";
import {SwiperSlide} from "swiper/react";

const Header = () => {
    return <>
        <Swiper spaceBetween={10} slidesPerView={"auto"} autoplay className={'rounded-[8px]'}>
            {swipers.map((item,index)=>(
                <SwiperSlide key={item.id}>
                    <img src={SwiperCover} alt={item.title} className={'w-full h-full object-cover rounded-[8px]'}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
}

export default Header;