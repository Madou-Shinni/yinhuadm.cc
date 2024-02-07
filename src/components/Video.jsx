const Video = ({id, cover, note, title}) => {
    return <div className={`item
            w-[calc(12%-18px)]
            max-md:w-[calc(25%-18px)]
            max-lg:w-[calc(20%-18px)]
            max-2xl:w-[calc(16%-18px)]
            max-3xl:w-[calc(14%-18px)]
    `}>
        <div className={`cover relative pt-[140%]`}>
            <div className={`cover`}>
                <img src={cover} alt={title} className={'absolute top-0 left-0 w-full h-full object-cover rounded-[8px]'}/>
            </div>
            <div className={`note absolute left-1/2 translate-x-1/2 bottom-3 text-white one-lines-ellipsis`}>
                {note}
            </div>
        </div>
        <div className={'title one-lines-ellipsis'}>
            <h3>{title}</h3>
        </div>
    </div>
}

export default Video;