import "./style.css";
import imgReact from "../../components/img/reactLogo.png";
import imgHtml from "../../components/img/html.png";
import imgCss from "../../components/img/css.png";
import imgJavaScript from "../../components/img/javaScript.png";
import imgJava from "../../components/img/java.png";

const Software = () => {
  return (
    <section id="software" className="software">
      <div className="titulo">
        <h2 className="tituloTxt">Softwares</h2>
      </div>

      <div className="divisaoColuna">
        <div className="informacaoSoftware">
          <div>
            <div className="graduacaoSoftware">
              <div className="contanerImg">
                <div className="imgLogo">
                  <img
                    className="imagemLogoReact"
                    src={imgReact}
                    alt="Imagem Logo React/Js"
                  />
                </div>
              </div>
              <div className="containerTxt">
                <div>
                  <p className="graduacoes">React JS</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="graduacaoSoftware">
              <div className="contanerImg">
                <div className="imgLogo">
                  <img
                    className="imagemLogoHtml"
                    src={imgHtml}
                    alt="Imagem Logo HTML"
                  />
                </div>
              </div>
              <div className="containerTxt">
                <div>
                  <p className="graduacoes">HTML</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="graduacaoSoftware">
              <div className="contanerImg">
                <div className="imgLogo">
                  <img
                    className="imagemLogoCss"
                    src={imgCss}
                    alt="Imagem Logo CSS"
                  />
                </div>
              </div>
              <div className="containerTxt">
                <div>
                  <p className="graduacoes">CSS</p>
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
                    className="imagemLogoJavaScript"
                    src={imgJavaScript}
                    alt="Imagem Logo JavaScripT"
                  />
                </div>
              </div>
              <div className="containerTxt">
                <div>
                  <p className="graduacoes">JavaScript</p>
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
                    src={imgJava}
                    alt="Imagem Logo Java"
                  />
                </div>
              </div>
              <div className="containerTxt">
                <div>
                  <p className="graduacoes">Java</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Software;
