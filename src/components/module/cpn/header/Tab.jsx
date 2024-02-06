const Tab = (props) => {
    return <div className={'hover:text-pink-300 hover:bg-white rounded-[8px] px-[5px]'}>
        <h3 className={'text-m'}>{props.children}</h3>
    </div>
}

const Tabs = (props) => {
    return <div className={'flex gap-[10px] leading-[34px] text-[#616161] cursor-pointer p-[6px]'}>
        {props.tabs ? props.tabs?.map((item, index) => (
            <Tab key={index}>
                {item}
            </Tab>
        )) : <Tab>
                更多
            </Tab>
        }
    </div>
}

export default Tabs;