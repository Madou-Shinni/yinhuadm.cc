import Tabs from "./Tab.jsx";

const Header = (props) => {
    return <div className={'container flex items-center mt-[20px] max-sm:flex-col max-sm:items-start'}>
        <h2 className={'flex-grow text-2xl font-bold'}>{props.name}</h2>
        <div className={'bg-[#e9ecef] px-[10px] rounded-[8px] max-sm:px-[2px]'}>
            <Tabs tabs={props.tabs} />
        </div>
    </div>
}

export default Header;