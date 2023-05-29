
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Addmovie from "./component/Addmovie";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Moviedetails from "./component/Moviedetails";
import Favorites from "./component/Favorites";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/add" element={ <Addmovie /> } />
        <Route path="/moviedetails/:id" element={ <Moviedetails />} />
        <Route path = "/fav" element={ <Favorites />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;