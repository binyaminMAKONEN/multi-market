// import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>  
       
      <Route path='/' element={<Navbar/>} />
        
      </Routes>
        {/* <Navbar/> */}
        {/* <Header/> */}
  
    </div>
  );
}

export default App;
