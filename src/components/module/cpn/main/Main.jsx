import Video from "../../../Video.jsx";

const Main = (props) => {
    return <div className={'container mt-[10px]'}>
        <div className={'flex gap-5 flex-wrap'}>
            {
                props.data?.map((item,index) => {
                    return <Video key={item.id} note={item.note} id={item.id} cover={item.cover} title={item.title} />
                })
            }
        </div>
    </div>
}

export default Main;