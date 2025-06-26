import { AtIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='
            h-24 w-full
            flex justify-between items-center
            pl-4 pr-4
            text-lg font-[700] text-ghost-white
            bg-gradient-to-t from-royal-blue/10 to-purple-rain/60
        '>
                <div className="flex gap-1 basis-1/2">
                    <AtIcon size={25} />
                    <h1><Link to="/home">bl.geers</Link></h1>
                </div>

            <ul className="flex justify-end basis-1/2">
                <li className="inline p-1"><a className="text-lg hover:text-lavender/30" href="">Postagens</a></li>
                <li className="inline p-1"><a className="text-lg hover:text-lavender/30" href="">Temas</a></li>
                <li className="inline p-1"><a className="text-lg hover:text-lavender/30" href="">Criar Tema</a></li>
                <li className="inline p-1"><a className="text-lg hover:text-lavender/30" href="">Perfil</a></li>
                <li className="inline p-1"><a className="text-lg hover:text-lavender/30" href="">Sair</a></li>
            </ul>
        </div>
    )
}

export default Navbar