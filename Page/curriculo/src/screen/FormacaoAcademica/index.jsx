import "./style.css";
import imgCefet from "../../components/img/cefet.png";
import imgSerratec from "../../components/img/serratec.png";
import imgSenai from "../../components/img/Senai.png";

const FormacaoAcademica = () => {
  return (
    <section id="formacaoAcademica" className="formacaoAcademica">
      <div className="titulo">
        <h2 className="tituloTxt">Formacao Acadêmica</h2>
      </div>

      <div className="informacao">
        <div>
          <div className="graduacao">
            <div className="contanerImg">
              <div className="imgLogo">
                <img
                  className="imagemLogo"
                  src={imgCefet}
                  alt="Imagem Logo CEFET/RJ"
                />
              </div>
            </div>
            <div className="containerTxt">
              <p className="data">2021</p>
              <div>
                <p className="graduacoes">
                  Graduando em sistemas de informação
                </p>
                <p className="data">CEFET/NF</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="graduacao">
            <div className="contanerImg">
              <div className="imgLogo">
                <img
                  className="imagemLogoSenai"
                  src={imgSenai}
                  alt="Imagem Logo CEFET/RJ"
                />
              </div>
              <div className="imgLogo">
                <img
                  className="imagemLogoSerratec"
                  src={imgSerratec}
                  alt="Imagem Logo CEFET/RJ"
                />
              </div>
            </div>
            <div className="containerTxt">
              <p className="data">2021</p>
              <div>
                <p className="graduacoes">Residente em TIC/Software</p>
                <p className="data">Serratec/SENAI</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="graduacao">
            <div className="contanerImg">
              <div className="imgLogo">
                <img
                  className="imagemLogoSenai"
                  src={imgSenai}
                  alt="Imagem Logo CEFET/RJ"
                />
              </div>
            </div>
            <div className="containerTxt">
              <p className="data">2020</p>
              <div>
                <p className="graduacoes">Técnico em Mecatrônica</p>
                <p className="data">Senai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormacaoAcademica;
