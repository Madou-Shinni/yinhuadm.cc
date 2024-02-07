import Video from "../../../Video.jsx";

const Main = (props) => {
    return <div className={'container mt-[10px]'}>
        <div className={'flex gap-5 flex-wrap'}>
            {
                props.data?.map((item,index) => {
                    // 逻辑：如果没有传入weekday属性，或者传入了weekday属性，且值为'周一'，则返回true，否则返回false
                    let ok = !item.weekday || item.weekday === '周一';
                    return <Video className={`${ok ? 'active' : ''}`} key={item.id} note={item.note} id={item.id} cover={item.cover} title={item.title} />
                })
            }
        </div>
    </div>
}

export default Main;