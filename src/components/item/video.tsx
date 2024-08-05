import {ContainerVideo, ContentVideo, VideoProp, } from './styled';

interface Iprops {
    video: any;
}

function VideoItem ({video}: Iprops) {
    return(
        <>
            <ContainerVideo>
                <ContentVideo>
                    <VideoProp muted playsInline loop autoPlay >
                        <source src={video} type='video/mp4'/>
                    </VideoProp>
                </ContentVideo>
            </ContainerVideo>
        </>
    )
};

export default VideoItem;