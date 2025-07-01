import Popup from 'reactjs-popup';
import FormPostagem from '../formpostagem/FormPostagem';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'

function ModalPostagem() {
    return (
        <Popup
            trigger={
                <button className="
                    flex
                    justify-around
                    gap-4
                    rounded-full
                  border-royal-blue
                  bg-purple-rain
                    py-2 px-4
                  hover:bg-purple-rain/65

                    text-sm
                    font-[600]
                ">
                    Nova Postagem
                </button>
            }
            modal
        >
            <FormPostagem />
        </Popup>
    );
}

export default ModalPostagem;