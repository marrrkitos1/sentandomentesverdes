import React from 'react'

function Footer() {
    return (
        <div>
            <footer id="footer" className="p-5 lg:p-4">
                <div id="accesoRedes">
                    <ul className="flex justify-around">
                        <a className="flex items-center" href="https://www.instagram.com/ees7elparaiso_patiosabiertos/" target="_blank"
                            title="Instagram Institución"><img src="/src/img/instagram.svg" alt="Instagram Logo"
                                className="size-9 invert bg-white rounded-xl m-1 cursor-pointer lg:hover:scale-105"/>
                        </a>
                        <div className="textoDerechos">
                            <p className="text-center textFont text-4xl m-2 text-semibold" id="copyText">Patios Abiertos</p>
                        </div>
                        <a className="flex items-center" href="https://www.facebook.com/secundariaElParaiso" target="_blank"
                            title="Facebook Institución"><img src="/src/img/facebook.svg" alt="Facebook Logo" className="size-9 bg-white m-1 rounded-3xl cursor-pointer lg:hover:scale-105"/></a>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer
