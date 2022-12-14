// import './App.css';
// import {Route,Routes} from 'react-router-dom'
// import FirstNavbar from '../src/components/FirstNavbarLogin';
import ThirdNavbar from '../src/components/ThirdNavbar';
import Footer from './components/Footer';
// import SecondNavBar from './components/SecondNavBar';
// import Toolbar from './Features/Toolbar';
import MainPage from './Pages/mainPage';
function App() {
  return (
    <div className="App">
      
        
        
      {/* <FirstNavbar/> */}
      {/* <SecondNavBar/> */}
      <ThirdNavbar/>
      {/* <Toolbar/> */}
       <MainPage/>
       <Footer/>
       
       
  
    </div>
  );
}

export default App;
