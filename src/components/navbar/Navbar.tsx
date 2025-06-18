import { AtIcon } from "@phosphor-icons/react";

function Navbar() {
    return (
        <div className='
            flex
            justify-center
            py-4
            bg-gradient-to-b from-royal-blue/20 to-purple-rain/40
            text-ghost-white

        '>
            <div className="
                container
                flex
                justify-between
                text-lg
                font-[700]
            ">
                <div className="flex gap-1">
                    <AtIcon size={25} />
                    <h1><a href="">bl.geers</a></h1>
                </div>

                <ul>
                    <li className="inline p-1"><a className="text-lg hover:text-lavender/30" href="">Postagens</a></li>
                    <li className="inline p-1"><a className="text-lg hover:text-lavender/30" href="">Temas</a></li>
                    <li className="inline p-1"><a className="text-lg hover:text-lavender/30" href="">Criar Tema</a></li>
                    <li className="inline p-1"><a className="text-lg hover:text-lavender/30" href="">Perfil</a></li>
                    <li className="inline p-1"><a className="text-lg hover:text-lavender/30" href="">Sair</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar