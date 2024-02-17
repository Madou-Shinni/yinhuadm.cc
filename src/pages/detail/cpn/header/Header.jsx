import Cover from "./cpn/Cover.jsx";
import Info from "./cpn/Info.jsx";

const Header = () => {
    return <div className={'w-full'}>
        <Cover className={'max-sm:hidden'}/>
        <Info/>
    </div>
}

export default Header;
