import Player from "./cpn/player/Player.jsx";
import Side from "./cpn/side/Side.jsx";

const Play = () => {
    return <div className={'container flex margin-y-auto mt-[64px] p-[20px] max-sm:flex-col'}>
        <Player />
        <Side />
    </div>
}

export default Play;