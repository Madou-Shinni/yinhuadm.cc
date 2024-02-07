import Tag from "../../../../../components/Tag.jsx";
import {useParams} from "react-router-dom";
import {getVideo} from "../../../../../api/detail.js";

const InfoHeader = () => {
    const {id} = useParams();
    const {data} = getVideo({id});

    return <div className={'w-full mt-25px'}>
        <h1 className={'text-3xl font-bold leading-normal'}>{data?.title}</h1>
        <div className={'tags flex gap-1'}>
            {
                data?.tags?.map((item, index) => <Tag key={index}>{item}</Tag>)
            }
        </div>
    </div>
}

export default InfoHeader;