
import AboutUsPage from './components/AboutUsPage';
import ContactsPage from './components/ContactsPage';
import FAQPage from './components/FAQPage';
import ServicePage from './components/ServicePage';
import MainPage from './components/MainPage';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import Profile from './components/Profile';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/about-us' element={<AboutUsPage/>}/>
      <Route path='/service' element={<ServicePage/>}/>
      <Route path='/faq' element={<FAQPage/>}/>
      <Route path='/contacts' element={<ContactsPage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Routes>
      
    </div>
  );
}

export default App;