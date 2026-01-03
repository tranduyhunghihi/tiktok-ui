import * as httpRequest from '~/utils/httpRequest';

export const preview = async () => {
    try {
        const res = await httpRequest.get('users')
        return res
    }
    catch (error) {
        console.log(error)
    }
}