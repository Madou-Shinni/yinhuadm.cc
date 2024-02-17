import {getPlay, updatePlay} from "../../../../api/play.js";
import Loading from "../../../base/loading/Loading.jsx";
import ErrorBlock from "../../../base/error-block/ErrorBlock.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getVideo} from "@/api/detail.js";

const Player = () => {
    const {id,sid,nid} = useParams();
    const {data,isLoading,error} = getPlay({
        videoId: id,
        playLine: sid,
        episodeId: nid
    });
    const {data:video,isLoading:videoLoading} = getVideo({id});

    // 先更新
    updatePlay({
        videoId: id,
        playLine: sid,
        episodeId: nid
    });

    useEffect(()=>{
        document.title = `${video?.title} - 第${nid}集`;
    },[data])

    if (videoLoading) {
        return <Loading/>
    }

    if (isLoading) return <Loading />;
    if (error) return <ErrorBlock />;




    return <div className={'w-full h-[50vh] min-h-[300px] min-w-[360px] flex-grow'}>
        <iframe border="0" src={
            `https://player.mcue.cc/yinhua/?url=${data?.url}&next=${!data.url_next ? '' : window.location.protocol + '//' + window.location.host + data?.link_next}&title=${video?.title+' - 第'+nid+'集'}`
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
