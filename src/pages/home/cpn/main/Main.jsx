import Module from "../../../../components/module/Module.jsx";
import {getHome} from "../../../../api/home.js";

const Main = () => {
    const {data} = getHome();
    return <div className={'container'}>
        {
            data?.modules?.map((module) => {
                return <Module key={module.name} name={module.name} tabs={module.tabs} data={module.contentList} />
            })
        }
    </div>
}

export default Main;