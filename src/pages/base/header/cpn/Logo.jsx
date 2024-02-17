import {useNavigate} from "react-router-dom";

const logoSrc = "https://oss-cdn.meowa.cn/mxtheme/images/logos.png"

const Logo = () => {
    const navigate = useNavigate();
    const onBackHome = () => {
        navigate('/');
    }

    return <div className={'w-[200px] mr-[10px]'}
                onClick={onBackHome}
    >
        <img width={'100%'} height={'100%'} src={logoSrc} alt=""/>
    </div>
}

export default Logo;
