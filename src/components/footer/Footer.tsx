import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <div className="
            flex justify-center
            bg-gradient-to-b from-miriam-blue to-black/45
            text-lavender
        ">
            <div className="
                container 
                grid grid-cols-[0.5fr_auto_auto]
                items-center
                justify-center
                py-2
            ">
                <p className='text-lg font-[600]'>@bl.geers | Copyright: {data}</p>
                <div className='h-25 border-1 m-2'></div>
                <div>
                    <p className='text-base font-[435]'>Acesse nossas redes sociais:</p>
                    <div className='flex flex-col gap-2'>
                        <ul>
                            <li><a className='flex items-center hover:text-lavender/30' href=''><GithubLogoIcon size={22} weight='regular' color='lavender'/><p className='p-1'>GitHub</p></a></li>
                            <li><a className='flex items-center hover:text-lavender/30' href=''><LinkedinLogoIcon size={22} weight='regular' color='lavender'/><p className='p-1'>LinkedIn</p></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer