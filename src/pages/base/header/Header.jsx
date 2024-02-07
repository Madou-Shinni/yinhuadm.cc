import SearchBar from "./cpn/SearchBar.jsx";
import Logo from "./cpn/Logo.jsx";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const onBackHome = () => {
        navigate('/');
    }

    return <div className={`fixed left-0 top-0 right-0 z-[11] margin-y-auto bg-[rgba(247,248,249,0.97)] h-[64px]
        shadow-md flex items-center justify-center px-[20px] cursor-pointer
    `}
         onClick={onBackHome}
    >
        <Logo/>
        <SearchBar/>
    </div>
}

export default Header;