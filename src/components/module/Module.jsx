import Header from "./cpn/header/Header.jsx";
import Main from "./cpn/main/Main.jsx";

const Module = (props) => {
    return <div className={'container'}>
        <Header name={props.name} tabs={props.tabs} />
        <Main data={props.data}/>
    </div>
}

export default Module;