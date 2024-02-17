import Tag from "../../../../../components/Tag.jsx";
import {useParams} from "react-router-dom";
import {getVideo} from "../../../../../api/detail.js";
import Cover from "@/pages/detail/cpn/header/cpn/Cover.jsx";

const InfoHeader = () => {
    const {id} = useParams();
    const {data} = getVideo({id});

    return <div className={'w-full mt-25px'}>
        <Cover className={'sm:hidden float-none flex justify-center'}/>
        <h1 className={'text-3xl font-bold leading-normal max-sm:text-center'}>{data?.title}</h1>
        <div className={'tags flex gap-1 max-sm:justify-center'}>
            {
                data?.tags?.map((item, index) => <Tag key={index}>{item}</Tag>)
            }
        </div>
    </div>
}

export default InfoHeader;
