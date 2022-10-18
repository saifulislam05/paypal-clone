import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import Shopping from "./components/Shopping/index";
import RetunrProduct from "./components/ReturnProduct/index";
import LinkCard from "./components/LinkCard/index";
import ShopOnline from "./components/ShopOnline/index";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Shopping/>
      <RetunrProduct/>
      <LinkCard/>
      <ShopOnline/>

    </>
  );
}

export default App;
