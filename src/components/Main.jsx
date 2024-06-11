import React, { useEffect, useRef } from 'react';

function Titulos({ id, text }) {
    return (
        <div id={`${id}`}>
            <h1 className="textFont verdePrincipal text-6xl text-center tracking-widest z-0" id="titleLogo">{`${text}`}</h1>
        </div>
    );
}

function Imagen({ id, imgLogoRef }) {
    return (
        <div id={`${id}`} className="flex justify-center">
            <img src="/logoProyecto.png" alt="Logo" title="Logo" id="imgLogo"
                className="max-w-90 h-auto lg:max-w-sm z-0" ref={imgLogoRef} />
        </div>
    );
}

function Parrafo({ id, text }) {
    return (
        <div id={`${id}`} className="p-2 text-center text-2xl lg:text-3xl">
            <p className="textFont text-3xl m-2">{`${text}`}</p>
        </div>
    );
}

function SlideImg({ id }) {
    return (
        <div className="slide rounded-xl">
            <img src={`/jpg/${id}.jpg`} alt={`Imagen ${id}`} className="rounded-xl" />
        </div>
    );
}

function SlideVideo({ id }) {
    return (
        <div className="slide rounded-xl">
            <video src={`/media/videos/${id}.mp4`} alt={`Video ${id}`} className="rounded-xl videoPlay" controls></video>
        </div>
    )
}

function Main({ imgLogoRef }) {
    return (
        <div>
            <main id="main">
                <section id="primeraVista" className="pb-2">
                    <Titulos id={"titleText"} text={"Sentando mentes veRdes"} />
                    <Imagen id={"imgDiv"} imgLogoRef={imgLogoRef} />
                </section>
                <section id="hipotesisDiv">
                    <Titulos id={"hipotesisTitle"} text={"¿De qué trata nuestro proyecto?"} />
                    <Parrafo id={"hipotesisParrafo"} text={"La aplicación de las “5R” (reducir, reciclar, renovar, reutilizar, reeducar) se pretende dar a conocer a través de este proyecto, junto a la investigación de acciones y costumbres que contribuyan al cuidado del ambiente sin contar necesariamente con la utilización del reciclaje habitual, favoreciendo a que todo/a ciudadano/a pueda poner en práctica lo planteado. Además, a través de la concientización de la comunidad se aspira a ser el puntapié inicial del cambio hasta lograr que se les dé un correcto tratamiento a los residuos, eliminando así los basurales a cielo abierto."} />
                </section>
                <section id="marcoTeorico" className="flex flex-col lg:flex-row lg:gap-20">
                    <div id="problematica" className="p-2 w-full">
                        <Titulos id={"problematicaTitle"} text={"Problemática"} />
                        <Parrafo id={"problematicaParrafo"} text={"La comunidad de El Paraíso sufre de la existencia de un basural a cielo abierto, el cual perjudica la vida y el ambiente local debido al tratamiento que no se le da a los desechos; los materiales reciclables no gozan de un filtrado para su posterior reutilización, lo que resulta en un desperdicio."} />
                    </div>
                    <div id="justificacion" className="p-2 w-full">
                        <Titulos id={"justifiacionTitle"} text={"Justificación"} />
                        <Parrafo id={"justifiacionParrafo"} text={"La finalidad de este proyecto consta de diferentes etapas. Como primera instancia se piensa desde el trabajo en el mes del ambiente con la reducción y categorización de los materiales a utilizar, en este caso las botellas de plástico. El 4 de mayo de 2024 se habilita un punto de recolección de botellas plásticas junto a un afiche informativo sobre el uso que se les dará (puff de plástico, mural de tapitas e invernadero de botellas)."} />
                    </div>
                </section>
                <section id="galeria" className="flex flex-col gap-10 pb-8">
                    <Titulos id={"galeriaTitle"} text={"Galería"} />
                    <div id="slider-container" className="overflow-hidden flex justify-center">
                        <span className="prev items-center self-center text-6xl pr-2">&lt;</span>
                        <div id="slider" className="flex justify-center w-54">
                            <div className="slide active rounded-xl">
                                <img src="/jpg/1.jpg" alt="Imagen 1" className="rounded-xl" />
                            </div>
                            <SlideImg id={2} />
                            <SlideImg id={3} />
                            <SlideImg id={4} />
                            <SlideVideo id={1} />
                            <SlideImg id={5} />
                            <SlideImg id={6} />
                            <SlideImg id={7} />
                            <SlideImg id={8} />
                            <SlideVideo id={2} />
                            <SlideImg id={9} />
                            <SlideImg id={10} />
                            <SlideImg id={11} />
                        </div>
                        <span className="next items-center h-full self-center text-6xl pl-2">&gt;</span>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Main;
