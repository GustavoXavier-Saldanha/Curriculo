import "./style.css";

const Software = () => {
  return (
    <section id="formacaoAcademica" className="formacaoAcademica">
      <div className="titulo">
        <h2 className="tituloTxt">Formacao Acadêmica</h2>
      </div>

      <div className="informacao">
        <div>
          <div className="graduacao">
            <p className="data">2021</p>
            <div>
              <p className="graduacoes">Graduando em sistemas de informação</p>
              <p className="data">CEFET/NF</p>
            </div>
          </div>
        </div>

        <div>
          <div className="graduacao">
            <p className="data">2021</p>
            <div>
              <p className="graduacoes">Residente em TIC/Software</p>
              <p className="data">Serratec/SENAI</p>
            </div>
          </div>
        </div>

        <div>
          <div className="graduacao">
            <p className="data">2020</p>
            <div>
              <p className="graduacoes">Técnico em Mecatrônica</p>
              <p className="data">Senai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Software;
