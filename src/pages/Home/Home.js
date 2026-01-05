import { useState, useEffect } from "react";
import Videos from "~/components/Videos";
import * as videoService from "~/services/videoService";


function Home() {
    const [videos, setVideos] = useState([])

    useEffect (() => {
        const fetchData = async() => {
            const res = await videoService.getVideos()
            setVideos(res)
        }
        fetchData()
    },[])

    // console.log(videos)

    return <Videos data={videos}/>;
}

export default Home;