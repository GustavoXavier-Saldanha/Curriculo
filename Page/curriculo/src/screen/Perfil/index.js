import './style.css'
import img from './fotita.jpg'

const Perfil = () => {
  
    return (
        <section id="perfil" className="perfil">
        

            <div className="titulo">
                <h2 className="tituloTxt">Perfil</h2>
            </div>

            <div className="divisao">
                <div>
                    <img className="imagem" src={img} alt="Imagem Currículo" />
                </div>

                <div >
                    <p className="descricao">
                        Bom relacionamento interpessoal, seja em trabalho em equipe ou em convívio social. Tenho foco nos meus objetivos, sou bastante persistente e proativo. A criatividade é algo bem presente em mim, gosto de criar coisas e colocar as minhas ideias em prática.
                    </p>
                </div>
            </div>
            
      </section>
     
    )
  }
  
  export default Perfil