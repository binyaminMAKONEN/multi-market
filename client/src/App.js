// import './App.css';
import {Route,Routes} from 'react-router-dom'
import FirstNavbarLogin from '../src/components/firstnavbarLogin';
import ThirdNavbar from '../src/components/ThirdNavbar';
import LoginComp from './components/LoginComp';
import SecondNavBar from './components/secondNavBar';
import MainPage from './Pages/mainPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/login' element={<LoginComp/>}/>
      </Routes>
        
     {/* <FirstNavbarLogin/> */}
      {/* <ThirdNavbar/> */}
      {/* <SecondNavBar/> */}
       
  
    </div>
  );
}

export default App;
