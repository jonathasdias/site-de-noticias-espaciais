import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import ButtonScrollToTop from "./components/ButtonScrollToTop";
import "./Global.css";

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <ButtonScrollToTop/>
    </>
  )
}

export default App;