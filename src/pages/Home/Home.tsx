import './Home.css';

function Home() {
    return (
        <div className='container'>
            <div>
                <div className='texto_superior'>
                    <h2>Seja Bem Vinde!</h2>
                    <p>Expresse aqui seus pensamentos e opniões</p>
                </div>

                <div>
                    <img 
                        src="https://i.imgur.com/VpwApCU.png" 
                        alt="Imagem da Página Home" 
                        width="400px"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home