import InfoHeader from "./InfoHeader.jsx";
import InfoContent from "./InfoContent.jsx";
import InfoFooter from "./InfoFooter.jsx";

const Info = () => {
    return <div className={'w-full bg-white rounded-[18px] p-[10px]'}>
        <InfoHeader/>
        <InfoContent/>
        <InfoFooter />
    </div>
}

export default Info;