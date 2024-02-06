import SearchBar from "./cpn/SearchBar.jsx";
import Logo from "./cpn/Logo.jsx";

const Header = () => {

    return <div className={`fixed left-0 top-0 right-0 z-[11] margin-y-auto bg-[rgba(247,248,249,0.97)] h-[64px]
        shadow-md flex items-center justify-center px-[20px]
    `}>
        <Logo/>
        <SearchBar/>
    </div>
}

export default Header;