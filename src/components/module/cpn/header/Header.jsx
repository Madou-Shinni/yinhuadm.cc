import Tabs from "./Tab.jsx";

const Header = (props) => {
    return <div className={'container flex justify-between items-center mt-[20px]'}>
        <h2 className={'text-2xl font-bold'}>{props.name}</h2>
        <div className={'bg-[#e9ecef] px-[10px] rounded-[8px]'}>
            <Tabs tabs={props.tabs} />
        </div>
    </div>
}

export default Header;