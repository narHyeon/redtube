import React, {useState, useEffect, useCallback} from 'react';
import styles from './app.module.css';
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";

function App({youtube}) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = useCallback(video => {
        setSelectedVideo(video);
    }, []);

    const search = useCallback(async (query) => {
        const response = await youtube.search(query);
        setVideos(response);
        setSelectedVideo(null);
    }, [youtube]);

    useEffect(() => {
        youtube.mostPopular().then(videos => setVideos(videos));
    }, [youtube]);

    return (
        <div className={styles.app}>
            <SearchHeader onSearch={search}/>
            <section className={styles.content}>
                {selectedVideo && <div className={styles.detail}>
                    <VideoDetail video={selectedVideo} />
                </div>}
                <div className={styles.list}>
                    <VideoList
                        videos={videos}
                        onVideoClick={selectVideo}
                        display={selectedVideo ? 'list' : 'grid'}/>
                </div>
            </section>
        </div>
    );
}

export default App;
