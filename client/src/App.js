// import './App.css';
import {Route,Routes} from 'react-router-dom';
import ThirdNavbar from '../src/components/ThirdNavbar';
import Footer from './components/Footer';
import MainPage from './Pages/mainPage';
import StoreList from './Pages/StoreList';
import About from "./Pages/About";
import AboutInfo from './components/InfoPageToolBar/AboutInfo';
import Questions from './components/InfoPageToolBar/Questions';
import CheckOut from "./Pages/CheckOut";
import InfoPage from './Pages/InfoPage';
import InStore from './Pages/InStore';
import PersonalArea from './Pages/PersonalArea';

function App() {
  return (
    <>
    <ThirdNavbar/>
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
  {/* <BottomBar/> */}
  <Footer/> 
    </>
   
  );
}

export default App;
