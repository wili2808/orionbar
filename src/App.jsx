import "./app.css";
import { Home } from "./components/Home/Home.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Banner } from "./components/Banner/Banner.jsx";

function App() {
  return (
    <>
      <Home></Home>
      <Navbar></Navbar>
      <Banner></Banner>
    </>
  );
}

export default App;
