import { Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Teams from "./Components/Teams";
import Home from "./Components/Home";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/teams" element={ <Teams/> }/>
    </Routes>
    </>
  );
}

export default App;
