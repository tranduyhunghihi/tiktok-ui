import { useState, useEffect, } from "react";
import Videos from "~/components/Videos";
import * as videoService from "~/services/videoService";


function Home() {
    const [videos, setVideos] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    useEffect (() => {
        const fetchData = async() => {
            setIsLoading(true)
            const res = await videoService.getVideos(page)  

            const newVideos = res.data
            const totalPages = res.meta.pagination.total_pages
           
            setVideos(pre => [...pre, ...newVideos])
            
            if(page >= totalPages) {
                setHasMore(false)
            }
            setIsLoading(false)
        }
        fetchData()
    },[page])


    const handleLoad = () => {
        if(isLoading || !hasMore) return 
        setIsLoading(true)
        setPage(pre => pre + 1)
    }


    // console.log('page', page)

    return <Videos data={videos} isFollow={false} onLoadMore={handleLoad} hasMore={hasMore}/>;
}

export default Home;