import * as httpRequest from '~/utils/httpRequest';

export const getVideos = async(page = 1) => {
    try{
        const res = await httpRequest.get('videos',{
            params: {
                page
            }
        })
        return res.data

    }
    catch(error) {
        console.log(error)
    }
}