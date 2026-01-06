import * as httpRequest from '~/utils/httpRequest';

export const getVideos = async(page = 1) => {
    try{
        const res = await httpRequest.get('videos',{
            params: {
                page,
                per_page: 5
            }
        })
        return res

    }
    catch(error) {
        console.log(error)
    }
}