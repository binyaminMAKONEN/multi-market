// import './App.css';
// import {Route,Routes} from 'react-router-dom'
import FirstNavbarLogin from '../src/components/firstnavbarLogin';
import ThirdNavbar from '../src/components/ThirdNavbar';
import SecondNavBar from './components/secondNavBar';
import MainPage from './Pages/mainPage';
function App() {
  return (
    <div className="App">
      
        
        
     <FirstNavbarLogin/>
      {/* <ThirdNavbar/> */}
      {/* <SecondNavBar/> */}
       <MainPage/>
       
  
    </div>
  );
}

export default App;
