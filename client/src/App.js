// import './App.css';
// import {Route,Routes} from 'react-router-dom'
// import FirstNavbarLogin from '../src/components/firstnavbarLogin';
import ThirdNavbar from '../src/components/ThirdNavbar';
import Footer from './components/Footer';
// import SecondNavBar from './components/SecondNavBar';
// import Toolbar from './Features/Toolbar';
import MainPage from './Pages/mainPage';

import ToolBar from "./Features/Toolbar"
import StoreList from './Pages/StoreList';
function App() {
  return (
    <div className="App">
      
        
        
      {/* <FirstNavbarLogin/> */}
      {/* <SecondNavBar/> */}

      <ThirdNavbar/>
      {/* <Toolbar/> */}
       <MainPage/>
       <Footer/>
       
       
  
    </div>
  );
}

export default App;
