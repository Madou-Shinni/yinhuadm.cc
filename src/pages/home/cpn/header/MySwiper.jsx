import {Swiper, SwiperSlide} from "swiper/react";
import {getHome} from "../../../../api/home.js";

const MySwiper = () => {
    const {data} = getHome();
    return <Swiper spaceBetween={50} autoplay className={'rounded-[8px] leading-normal relative'}>
        {data?.banners?.map((item,index)=>(
            <SwiperSlide key={item.detailId} className={'rounded-[8px]'}>
                <a className={`block h-[28vw] bg-center bg-no-repeat bg-cover rounded-[8px]`}
                   style={{backgroundImage: `url(${item.cover})`}}
                >
                </a>
                <div className={`intr absolute top-0 bottom-0 flex flex-col justify-end w-full p-[10px] text-m text-gray-300
                    bg-[rgba(1,1,1,.2)]
                    lg:hidden
                `}>
                    <div className={'title'}>
                        <h1>{item.title}</h1>
                    </div>
                    <p>{item.status}</p>
                    <p className={'one-lines-ellipsis'}>{item.description}</p>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
}

const InnerSwiper = () => {
    const {data} = getHome();
    return <Swiper spaceBetween={50} autoplay className={`rounded-[8px]`} style={{width:'187px'}}>
        {data?.banners?.map((item,index)=>(
            <SwiperSlide key={item.detailId} className={'rounded-[8px] leading-normal'}>
                <a className={`rounded-[8px] cursor-pointer text-white`}>
                    <div className={'cover w-[126px] h-[168px] margin-y-auto'}>
                        <img width={'100%'} height={'100%'} className={'h-full rounded-[8px] object-cover'} src={item.cover} alt=""/>
                    </div>
                    <div className={'title'}>
                        <h1>{item.title}</h1>
                    </div>
                </a>
                <div className={'intr text-m text-gray-300'}>
                    <p>{item.status}</p>
                    <p className={'one-lines-ellipsis'}>{item.description}</p>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
}

export default MySwiper;
export {InnerSwiper};