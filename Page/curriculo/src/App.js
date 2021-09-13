import NavBar from "./components/navbar";
import Perfil from "./screen/Perfil/index";
import FormacaoAcademica from "./screen/FormacaoAcademica/index";
import Certificacao from "./screen/Certificacao/index";
import Footer from "./screen/footer/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Perfil />
      <FormacaoAcademica />
      <Certificacao />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
