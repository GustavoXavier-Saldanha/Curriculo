import "./style.css";
import imgLinkedin from "../../components/img/linkedin.png";
import imgWhatsapp from "../../components/img/whatsapp.png";
import imgGitHub from "../../components/img/github.png";
import imgGmail from "../../components/img/gmail.png";

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <div className="titulo">
        <h2 className="tituloTxt">Contato</h2>
      </div>

      <div className="divisaoColuna">
        <div className="informacaoSoftware">
          <div>
            <div className="graduacaoSoftware">
              <div className="contanerImg">
                <div className="imgLogo">
                  <img
                    className="imagemWhatsapp"
                    src={imgWhatsapp}
                    alt="Imagem Telefone Whatsapp"
                  />
                </div>
              </div>
              <div className="containerTxt">
                <div>
                  <p className="graduacoes">(22) 99773-6096</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="graduacaoSoftware">
              <div className="contanerImg">
                <div className="imgLogo">
                  <img
                    className="imagemGmail"
                    src={imgGmail}
                    alt="Imagem Gmail"
                  />
                </div>
              </div>
              <div className="containerTxt">
                <div>
                  <p className="graduacoes">gustavosaldxav@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="informacaoSoftware">
          <div>
            <div className="graduacaoSoftware">
              <div className="contanerImg">
                <div className="imgLogo">
                  <img
                    className="imagemLinkedin"
                    src={imgLinkedin}
                    alt="Imagem Linkedin"
                  />
                </div>
              </div>
              <div className="containerTxt">
                <div>
                  <p className="graduacoes">Gustavo Xavier</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="graduacaoSoftware">
              <div className="contanerImg">
                <div className="imgLogo">
                  <img
                    className="imagemLogoJava"
                    src={imgGitHub}
                    alt="Imagem Logo Java"
                  />
                </div>
              </div>
              <div className="containerTxt">
                <div>
                  <p className="graduacoes">GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
