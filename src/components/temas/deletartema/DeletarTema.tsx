import { useCallback, useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Tema from "../../../models/Tema"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"

function DeletarTema() {
    const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    const buscaCall = useCallback(async (id: string) => {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (e: unknown) {
            if (typeof e === "string" && e.includes('403')) {
                handleLogout()
            } else {
                console.log("Erro desconhecido: ", e)
            }
        }
    }, [handleLogout, token])

    useEffect(() => {
        console.log(token)
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [navigate, token])

    useEffect(() => {
        if (id !== undefined) {
            buscaCall(id)
        }
    }, [buscaCall, id])

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Tema apagado com sucesso')

        } catch (e: unknown) {
            if (typeof e === "string" && e.includes('403')) {
                handleLogout()
            } else {
                console.log("Erro desconhecido: ", e)
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/temas")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4 text-ghost-white'>Deletar tema</h1>
            <p className='text-center font-semibold mb-4 text-ghost-white'>
                Você tem certeza de que deseja apagar o tema a seguir?</p>
            <div className='border-2 border-lavender flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-purple-rain text-ghost-white font-bold text-2xl'>
                    Tema
                </header>
                <p className='p-8 text-3xl bg-miriam-blue h-full text-ghost-white'>{tema.descricao}</p>

                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-500 hover:bg-red-800 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-purple-rain 
                                   hover:bg-indigo-800 flex items-center justify-center'
                                   onClick={deletarTema}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarTema