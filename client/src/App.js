import ThirdNavbar from '../src/components/ThirdNavbar';
import Footer from './components/Footer';
import MainPage from './Pages/mainPage';
import StoreList from './Pages/StoreList';
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import AboutInfo from './components/InfoPageToolBar/AboutInfo';
import Questions from './components/InfoPageToolBar/Questions';
import CheckOut from "./Pages/CheckOut"
import InfoPage from './Pages/InfoPage'
import InStore from './Pages/InStore'
import PersonalArea from './Pages/PersonalArea'
import Toolbar from './Features/Toolbar'
import StoreHeader from './Features/StoreHeader';
import BottomBar from './components/BottomBar';
function App() {
  return (
    <>
    <ThirdNavbar/>
{/* <StoreHeader/> */}

    <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/StoreList' element={<StoreList />}/>
    <Route path='/InStore' element={<InStore />}/>
    <Route path='/CheckOut' element={<CheckOut />}/>
    <Route path='/InfoPage' element={<InfoPage />}>
      <Route index path='AboutInfo' element={<AboutInfo />}/>
      <Route  path='Questions' element={<Questions />}/>
    </Route>
    <Route path='/PersonalArea' element={<PersonalArea />}/>
    <Route path='/About' element={<About />}/>
  </Routes>
  <BottomBar/>
  <Footer/>
    </>
   
  );
}

export default App;
