import styles from './Item.module.scss';

const Item = (props) => {
    return <div className={'w-[calc(100%-15px)] bg-[#fff] rounded-[8px] shadow p-[10px] relative overflow-visible'}>
        {/* tag */}
        <div className={`absolute right-0 top-[-25px] h-[40px] leading-[26px] text-s text-[#616161] bg-[#e9ecef] font-bold rounded-[8px] z-[-1] ${styles.tag}`}
            style={{
                padding: '0 10px 0 2px',
            }}
        >
            {props.tag}
        </div>
        {/*img*/}
        <a className={'block float-left w-[120px] relative'} style={{
            margin: '-45px 0 10px 0', // 左上角
        }}>
            <div className={'relative  pt-[140%]'}>
                <div className={'note absolute left-0 bottom-0 right-0 z-10 text-white text-center text-s'}>{props.note}</div>
                <div className={'cover w-full h-full'}>
                    <img src={props.cover} alt="" className={'object-cover absolute top-0 left-0 rounded-[14px]'}/>
                </div>
            </div>
        </a>
    </div>
}

export default Item;