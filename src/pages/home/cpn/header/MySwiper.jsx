import {Swiper, SwiperSlide} from "swiper/react";
import {getHome} from "../../../../api/home.js";
import {useState} from "react";
import {Controller} from "swiper/modules";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const MySwiper = () => {
    const {data} = getHome();

    // store swiper instances
    const [outerSwiper, setOuterSwiper] = useState(null);
    const [innerSwiper, setInnerSwiper] = useState(null);

    const renderInnerSwiper = () => (
        <div className={'lg:absolute lg:top-5 lg:right-10 max-lg:invisible'}>
            <Swiper spaceBetween={50} autoplay={{delay: 2500}}
                    className={`rounded-[8px]`}
                    style={{width:'187px'}}
                    modules={[Controller]}
                    onSwiper={setInnerSwiper}
                    controller={{control: outerSwiper}}
            >
                {data?.banners?.map((item,index)=>(
                    <SwiperSlide key={item.detailId} className={'rounded-[8px] leading-normal'}>
                        <a className={`rounded-[8px] cursor-pointer text-white`}>
                            <div className={'cover w-[126px] h-[168px] margin-y-auto'}>
                                <img width={'100%'} height={'100%'} className={'h-full rounded-[8px] object-cover'} src={item.cover} alt=""/>
                            </div>
                            <div className={'title'}>
                                <h1 className={'text-2xl font-bold'}>{item.title}</h1>
                            </div>
                        </a>
                        <div className={'intr text-m text-gray-300'}>
                            <p>{item.status}</p>
                            <p className={'one-lines-ellipsis'}>{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={'prev absolute top-1/2 left-0 rounded-[50%] bg-white z-10 text-gray-950 cursor-pointer'}
                onClick={() => outerSwiper.slidePrev()}
            >
                <ArrowBackIosRoundedIcon/>
            </div>
            <div className={'next absolute top-1/2 right-0 rounded-[50%] bg-white z-10 text-gray-950 cursor-pointer'}
                onClick={() => outerSwiper.slideNext()}
            >
                <ArrowForwardIosRoundedIcon/>
            </div>
        </div>
    )


    return <>
        <Swiper spaceBetween={50}
                autoplay={{delay: 2500}}
                modules={[Controller]}
                onSwiper={setOuterSwiper}
                controller={{control: innerSwiper}}
                className={'rounded-[8px] leading-normal relative'}
        >
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
                            <h1 className={'text-2xl font-bold'}>{item.title}</h1>
                        </div>
                        <p>{item.status}</p>
                        <p className={'one-lines-ellipsis'}>{item.description}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        {renderInnerSwiper()}
    </>
}

export default MySwiper;