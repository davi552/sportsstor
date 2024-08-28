import Header from "./components/header/header";
import ComponentFooter from "./components/footer/componentFooter";

import { Outlet } from "react-router-dom";
import ScrollTop from "./components/scrolltop/scroll";

function App() {
  return (
    <>
      <Header/>
      <ScrollTop/>
      <Outlet/>
      <ComponentFooter/>
    </>
  );
}

export default App;
