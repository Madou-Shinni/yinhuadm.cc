import styles from './Content.module.scss';
import {useParams} from "react-router-dom";
import {getVideo} from "../../../../../api/detail.js";
import {formatDate} from "../../../../../utils/date.js";

const InfoContent = () => {
    const {id} = useParams();
    const {data} = getVideo({id});

    return <div className={`bg-white p-[25px] sm:min-h-[253px] ${styles.content}`}>
        <div className={`flex pb-[5px] text-m`}>
            <div className={`${styles.intro} max-h-[44px] overflow-hidden ${styles['info-introduction']}`}>
                <p>{data?.introduction}</p>
            </div>
        </div>
        <div className={'flex pb-[5px] text-m'}>
            <span className={'mr-[8px] font-bold'}>导演: </span>
            <div>{data?.director}</div>
        </div>
        <div className={'flex pb-[5px] text-m'}>
            <span className={'mr-[8px] font-bold'}>编剧: </span>
            <div>{data?.screenwriter}</div>
        </div>
        <div className={'flex pb-[5px] text-m'}>
            <span className={'mr-[8px] font-bold'}>主演: </span>
            <div>
                {data?.starrings?.map((item, index) =>
                    <span key={index}>
                        <span>{item}</span>
                        <span className={'px-[7px] text-[#c2c6d0] text-s'}></span>
                    </span>)}
            </div>
        </div>
        <div className={'flex pb-[5px] text-m'}>
            <span className={'mr-[8px] font-bold'}>更新: </span>
            <div>{formatDate(data?.updateAt)}</div>
        </div>
        <div className={'flex pb-[5px] text-m'}>
            <span className={'mr-[8px] font-bold'}>片长: </span>
            <div>{data?.note}</div>
        </div>
        {/*{data?.thirdlink?.title && <div className={'flex pb-[5px] text-m text-green-600'}>*/}
        {/*    <span className={'mr-[8px] font-bold'}>豆瓣: </span>*/}
        {/*    <div>{}</div>*/}
        {/*</div>}*/}
    </div>
}

export default InfoContent;
