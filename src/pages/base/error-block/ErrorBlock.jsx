const defaultImg = 'https://th.bing.com/th/id/OIP.tu4WgcUxdQ8sPS6M4oMJOAHaHa?rs=1&pid=ImgDetMain'
const ErrorBlock = ({image=defaultImg,description='页面遇到一些小问题'}) => {
    return <div className={'flex flex-col items-center justify-center w-screen h-screen'}>
        <div className={'max-w-[100px] max-h-[100px]'}>
            <img src={image} alt=""/>
        </div>
        <div className={'mt-[20px]'}>
            <p className={'text-[14px]'}>{description}</p>
            <p className={'text-[13px] text-center'}>请稍后重试</p>
        </div>
    </div>
}

export default ErrorBlock;