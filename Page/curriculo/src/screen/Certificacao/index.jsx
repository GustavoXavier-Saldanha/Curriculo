import "./style.css";
import imgUdemy from "../../components/img/udemy.svg";
import imgScrum from "../../components/img/scrum.png";
const Certificacao = () => {
  return (
    <section id="certificacao" className="certificacao">
      <div className="titulo">
        <h2 className="tituloTxt">Certificados</h2>
      </div>

      <div className="informacao">
        <div>
          <div className="graduacao">
            <div className="contanerImg">
              <div className="imgLogo">
                <img
                  className="imagemLogoUdemy"
                  src={imgUdemy}
                  alt="Imagem Logo CEFET/RJ"
                />
              </div>
            </div>
            <div className="containerTxt">
              <p className="data">2021</p>
              <div>
                <p className="graduacoes">Scrum Fundamentals Certified</p>
                <p className="data">SCRUMstudy</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="graduacao">
            <div className="contanerImg">
              <div className="imgLogo">
                <img
                  className="imagemLogoScrum"
                  src={imgScrum}
                  alt="Imagem Logo CEFET/RJ"
                />
              </div>
            </div>
            <div className="containerTxt">
              <p className="data">2021</p>
              <div>
                <p className="graduacoes">Scrum Fundamentals Certified</p>
                <p className="data">SCRUMstudy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificacao;
