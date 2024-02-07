import styles from './Content.module.scss';

const InfoContent = () => {
    return <div className={`bg-white p-[25px] sm:min-h-[253px] ${styles.content}`}>
        <div className={`flex pb-[5px] text-m`}>
            <div className={`intro max-h-[44px] ${styles['info-introduction']}`}>
                <p>10 年前，世界与其他次元链接的“门”被打开，各种魔物不断出现，于是乎能力各异的猎魔者也随之出现，被称为“猎人”。程肖宇是一名实力最弱的 E 级猎人，在一次挑战任务中，遇到了可怕</p>
            </div>
        </div>
        <div className={'flex pb-[5px] text-m'}>
            <span className={'mr-[8px] font-bold'}>导演: </span>
            <div>中重俊祐</div>
        </div>
        <div className={'flex pb-[5px] text-m'}>
            <span className={'mr-[8px] font-bold'}>编剧: </span>
            <div>中重俊祐</div>
        </div>
        <div className={'flex pb-[5px] text-m'}>
            <span className={'mr-[8px] font-bold'}>主演: </span>
            <div>坂泰斗/中村源太/三川华月/上田丽奈/平川大辅/东地宏树</div>
        </div>
        <div className={'flex pb-[5px] text-m'}>
            <span className={'mr-[8px] font-bold'}>更新: </span>
            <div>2024-02-05</div>
        </div>
        <div className={'flex pb-[5px] text-m'}>
            <span className={'mr-[8px] font-bold'}>片长: </span>
            <div>更新至第05集</div>
        </div>
        <div className={'flex pb-[5px] text-m text-green-600'}>
            <span className={'mr-[8px] font-bold'}>豆瓣: </span>
            <div>我独自升级</div>
        </div>
    </div>
}

export default InfoContent;