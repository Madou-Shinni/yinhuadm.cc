const Tag = (props) => {
    const onHandleClick = () => {
        props?.onClick?.(props.children);
    }

    return <div className={`hover:text-pink-300 bg-white border border-solid border-[#e9ecef] rounded-[8px] px-[5px] cursor-pointer`}
                onClick={onHandleClick}
    >
        {props.children}
    </div>
}

export default Tag;