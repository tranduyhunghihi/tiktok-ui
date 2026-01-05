import { useState, useEffect } from "react";
import Videos from "~/components/Videos";
import * as videoService from "~/services/videoService";

function Following() {
    const [videos, setVideos] = useState([])

    useEffect (() => {
        const fetchData = async() => {
            const res = await videoService.getVideos()
            setVideos(res)
        }
        fetchData()
    },[])

    return <Videos data={videos} isFollow={true}/>;
}

export default Following;