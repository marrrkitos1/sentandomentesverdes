import React from 'react';

function Links({ id, text}) {
    return (
        <a href={`${id}`} className="content-center">
            <p className="text-xl lg:font-semibold pb-4 lg:pb-0 navLink">{`${text}`}</p>
        </a>
    )
}

function Header({ linksRef, iconRef }) {
    return (
        <div>
            <header id="header" className="p-1 lg:flex lg:content-center lg:sticky lg:top-0 z-10">
                <div id="topnav" className="flex content-center justify-between bg-#248A00 lg:w-2/12 lg:justify-center">
                    <a href="#home" className="flex content-center items-center text-xl">
                        <p className="text-xl lg:font-semibold navLink">Inicio</p>
                    </a>
                    <div id="iconContainer" className="flex lg:hidden">
                        <a className="flex content-center" id="icon" ref={iconRef}>
                            <img src="/src/img/menu.png" alt="Menu" className="size-10" />
                        </a>
                    </div>
                </div>
                <div id="links"
                    className="hidden flex-col lg:flex lg:flex-row pl-3 pb-2 lg:pl-0 lg:pb-0 w-full text-white lg:content-center lg:justify-around"
                    ref={linksRef}>
                    <Links id="#hipotesisDiv" text="Presentación" />
                    <Links id="#galeriaTitle" text="Galería" />
                    <Links id="#accesoRedes" text="Redes" />
                </div>
            </header>
        </div>
    );
}

export default Header;
