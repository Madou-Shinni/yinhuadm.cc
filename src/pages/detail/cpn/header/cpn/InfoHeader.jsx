import Tag from "../../../../../components/Tag.jsx";

const InfoHeader = () => {
    return <div className={'w-full mt-25px'}>
        <h1 className={'text-3xl font-bold leading-normal'}>我肚子升级</h1>
        <div className={'tags flex'}>
            {
                ['肚子','升级'].map((item, index) => <Tag key={index}>{item}</Tag>)
            }
        </div>
    </div>
}

export default InfoHeader;