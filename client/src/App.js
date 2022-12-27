import {Route,Routes} from 'react-router-dom'
import FirstNavbar from '../src/components/firstnavbarLogin';
import SecondNavBar from '../src/components/secondNavBar';
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
import BottomBar from "./components/BottomBar"
import ContactPage from './Pages/ContactPage';
import Orders from './components/profile/Orders';
import Address from './components/profile/Address';
import Details from './components/profile/Details';
import Password from './components/profile/Password';
import Team from './Pages/Team';
import SucsessPage from './Pages/SucsessPage';
import { useSelector } from 'react-redux';
function App() {
  const appStore = useSelector(state=>state)
  console.log();
  return (
  <>
    {appStore.auth.user == null || appStore.auth.user == undefined ?<FirstNavbar/>:<SecondNavBar/>}
    <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/StoreList' element={<StoreList />}/>
    <Route path='/InStore' element={<InStore />}/>
    <Route path='/CheckOut' element={<CheckOut />}/>
    <Route path='/InfoPage' element={<InfoPage />}>
      <Route index path='AboutInfo' element={<AboutInfo />}/>
      <Route  path='Questions' element={<Questions />}/>
    </Route>
    <Route path='/PersonalArea' element={<PersonalArea />}>
      <Route  path='orders' element={<Orders />}/>
      <Route  path='Address' element={<Address />}/>
      <Route  index path='details' element={<Details />}/>
      <Route  path='Password' element={<Password />}/>
    </Route>
    
    <Route path='/About' element={<About />}/> 
    <Route path='/ContactPage' element={<ContactPage />}/> 
    <Route path='/Team' element={<Team />}/> 
    <Route path='/SucsessPage' element={<SucsessPage />}/> 

  </Routes>
  <BottomBar/>
  <Footer/>
    </>
   
  );
}

export default App;
