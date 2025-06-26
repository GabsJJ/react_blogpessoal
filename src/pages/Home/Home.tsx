function Home() {
    return (
        <div className="
            flex 
            justify-center
        ">
            <div className="
                container
                grid 
                grid-cols-2
                items-center
                text-ghost-white
            ">
                <div className="
                    flex flex-col
                    justify-center
                    items-center
                    gap-4
                    py-4 px-4
                ">
                    <h2 className="
                        text-4xl
                        font-[600]
                    ">
                        Olá, seja bem-vind@!
                    </h2>
                    <p className="text-lg">Expresse aqui seus pensamentos e opniões</p>
                    <div className="
                        flex
                        justify-around
                        gap-4
                    ">
                        <a href="">
                            <div className="
                                rounded-full
                                border-royal-blue
                                bg-purple-rain
                                py-2 px-4
                                hover:bg-purple-rain/65
                            ">
                                <p className="
                                    text-sm
                                    font-[600]
                                ">
                                    Nova Postagem
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="
                    flex flex-col
                    items-center
                ">
                    <img 
                        src="https://i.imgur.com/VpwApCU.png" 
                        alt="Imagem da Página Home" 
                        width="400px"
                        className="
                            hue-rotate-322
                            w-2/3
                        "/>
                </div>
            </div>
        </div>
    )
}

export default Home