import { Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Teams from "./Components/Teams";
import Home from "./Components/Home";
import Team from './Components/Team';
import NotFound from './Components/NotFound';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path={"/teams"}> 
      <Route index element={<Teams/>}/>
        <Route path=":name" element={<Team/>}/>
      </Route>

      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
