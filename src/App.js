import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Section from "./Components/Main/Section/Section";
import Nav from "./Components/Header/NavBar/Nav";
import Footer from "./Components/Footer/Footer";
import Dialogs from "./Components/Main/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Main/Menu/Menu";
import Profile from "./Components/Main/Profile/Profile";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header>
          <Nav />
        </Header>
        <Main>
          <Routes>
            <Route path="/home" element={<Section />}></Route>
            <Route path="/dialogs/*" element={<Dialogs />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            {/* <Route path="/menu" element={<Menu />}></Route> */}
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </Main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
