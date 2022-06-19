import React, { useState, useEffect } from 'react'
import { getImagesAPI } from '../../helpers/getImagesAPI'


export const ImagesGallery = () => {

    const [imagesAPI, setImagesAPI] = useState([])

    useEffect(() => {

        getImagesAPI().
            then(dataImages => {

                const imagesRutes = []

                const imagesServer = dataImages.data

                imagesServer.forEach(img => {
                    imagesRutes.push(img.images.downsized_medium.url)
                });

                setImagesAPI(imagesRutes)

            })

    }, [])

    return (
        <div className="container-images">

            <div className="container-images__title">Nuestras Instalaciones</div>

            <div className="container-images__gallery">

                {
                    imagesAPI.map(img => {
                        return (
                            <img src={img} className="container-images__img" key={img} />
                        )
                    })
                }

            </div>

        </div>
    )
}
