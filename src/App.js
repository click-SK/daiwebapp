
import AboutUsPage from './components/AboutUsPage';
import Contacts from './components/Contacts';
import FAQ from './components/FAQ';
import Service from './components/Service';
import MainPage from './components/MainPage';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/about-us' element={<AboutUsPage/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </div>
  );
}

export default App;