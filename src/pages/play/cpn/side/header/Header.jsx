import {useParams} from "react-router-dom";
import {getVideo} from "@/api/detail.js";
import Tag from "@/components/Tag.jsx";

const Header = () => {
    const {id} = useParams();
    const {data} = getVideo({id});
    return <div className={'w-full h-full'}>
        <h3 className={'text-2xl font-bold'}>{data?.title}</h3>
        <div className={'flex'}>
            {
                data?.tags?.map((item, index) => <Tag className={'px-[8px] py-[2px] text-[13px]'} key={index}>{item}</Tag>)
            }
        </div>
    </div>
}

export default Header;