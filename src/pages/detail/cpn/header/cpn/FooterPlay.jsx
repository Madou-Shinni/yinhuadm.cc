import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const FooterPlay = () => {
    return <>
        <a className={'bg-[#f78ca0] p-[10px] rounded-[8px] text-white cursor-pointer'}>
            <PlayArrowRoundedIcon/>
            <span>立即播放</span>
        </a>
    </>
}

export default FooterPlay;