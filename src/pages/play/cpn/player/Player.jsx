import {getPlay} from "../../../../api/play.js";
import Loading from "../../../base/loading/Loading.jsx";
import ErrorBlock from "../../../base/error-block/ErrorBlock.jsx";
import {useParams} from "react-router-dom";

const Player = () => {
    const {id,sid,nid} = useParams();
    const {data,isLoading,error} = getPlay({
        videoId: id,
        playLine: sid,
        episodeId: nid
    });
    if (isLoading) return <Loading />;
    if (error) return <ErrorBlock />;

    return <div>
        <iframe border="0" src={
            `https://player.mcue.cc/yinhua/?url=${data.url}&next=${!data.url_next ? '' : window.location.protocol + '//' + window.location.host + "PlayLinkNext"}&title=${document.title.split("-")[0]}`
        }
                width="100%"
                height="100%"
                marginWidth="0"
                frameSpacing="0"
                allowfullscreen="true"
                marginHeight="0"
                frameBorder="0"
                scrolling="no"
                vspale="0"
                noResize>
        </iframe>
    </div>
}

export default Player;