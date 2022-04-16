import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css'
import NavbarP from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import {Outlet} from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import InfoF from './components/InfoF/InfoF';
import Dashboard from './pages/Dashboard/Dashborad';
import Favoritos from './pages/Favoritos/Favoritos';


function App() {
  return (


    
    <div className="App">

<section className="section">
        <div className="container">

      <NavbarP/>
      </div>
    
      </section>
      <section className="section">
        <div className="container">

      <div class="columns">
        
      
<BrowserRouter>
<Routes>
<Route path='/' element={<Landing/> }/>
<Route path='home' element={<Landing/> }/>
<Route path='dashboard' element={<><Aside/>  <Dashboard/> </>}/>
<Route path='favorites' element={<><Aside/> <Favoritos/> </>}/>
</Routes>
</BrowserRouter>,


</div>
</div>
</section>


<Footer/>
<InfoF/>

    </div>
  );
}

export default App;
