// import './App.css';
import {Route,Routes} from 'react-router-dom'
import FirstNavbarLogin from '../src/components/firstnavbarLogin';
import ThirdNavbar from '../src/components/ThirdNavbar';
import LoginComp from './components/LoginComp';
import Footer from './components/Footer';
import MainPage from './Pages/mainPage';
import ToolBar from "./Features/Toolbar"
import StoreList from './Pages/StoreList';
import About from "./Pages/About";
import CheckOut from "./Pages/CheckOut"
import InfoPage from './Pages/InfoPage'
import InStore from './Pages/InStore'
import PersonalArea from './Pages/PersonalArea'
function App() {
  return (
    <>
    <ThirdNavbar/>
    <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/StoreList' element={<StoreList />}/>
    <Route path='/InStore' element={<InStore />}/>
    <Route path='/CheckOut' element={<CheckOut />}/>
    <Route path='/InfoPage' element={<InfoPage />}/>
    <Route path='/PersonalArea' element={<PersonalArea />}/>
    <Route path='/About' element={<About />}/>
  </Routes>
  <Footer/>
    </>
   
  );
}

export default App;
