
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Livetrack from './Components/LiveTracker/Live';
import Search from './Components/searchlocation/search';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route index element={<Search/>}></Route>
    <Route path='/live' element={<Livetrack/>}></Route>
   </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
