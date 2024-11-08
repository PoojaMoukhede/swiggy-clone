import './App.css';
import HelpSupport from './components/HelpSupport.js';
import Main from './components/Main.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/Search.js';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/help' element={<HelpSupport/>}/>
<Route path='/search' element={<Search/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
// 6352412481 