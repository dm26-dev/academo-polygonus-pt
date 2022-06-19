import React from 'react'

export const YouTubeVideo = () => {
    return (

        <section className="container-flex">

            <div className="container-flex__video">
                <iframe
                    src="https://www.youtube.com/embed/IhZq2IGyoeo"
                    title="YouTube video player"
                    className="youtube-video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            <div className="container-flex__descripcion">

                <h3 className="container-flex__title">
                    ERRORES QUE PUEDES COMETER AL VOLANTE
                </h3>

                <p className="container-flex__parrafo">En este video te daremos algunas recomendaciones a la hora de manejar tu vehículo, recuerda llevar el cinturón bien puesto y tu kit de carretera en orden</p>

                <button className="btn btn-primary">Read More..</button>

            </div>

        </section>

    )
}
