/*
* 让flex内部盒子充满盒子内部的计算方法
* 1. 计算每个item的宽度
*    减去间距后再除以每行的盒子数量
* cols: 你希望排几列
* gap: 间距
* item的宽度 = (100% - (cols - 1) * gap) / cols
* */

const Video = ({id, cover, note, title,...props}) => {
    return <div className={`item
            w-[calc((100%-(9-1)*1.25rem)/9)]
            max-md:w-[calc((100%-(4-1)*1.25rem)/4)]
            max-lg:w-[calc((100%-(5-1)*1.25rem)/5)]
            max-2xl:w-[calc((100%-(6-1)*1.25rem)/6)]
            max-3xl:w-[calc((100%-(7-1)*1.25rem)/7)]
            ${props.className || ''}
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