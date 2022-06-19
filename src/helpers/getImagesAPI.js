import axios from 'axios'

import { urlImages } from './urlImages'

export const getImagesAPI = async () => {

    const {data} = await axios.get(urlImages)

    return data

}
