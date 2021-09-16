import NavBar from "./components/navbar";
import Perfil from "./screen/Perfil/index";
import FormacaoAcademica from "./screen/FormacaoAcademica/index";
import Certificacao from "./screen/Certificacao/index";
import Software from "./screen/Software/index";
import Contato from "./screen/Contato/index";
import Footer from "./screen/footer/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Perfil />
      <FormacaoAcademica />
      <Certificacao />
      <Software />
      <Contato />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
