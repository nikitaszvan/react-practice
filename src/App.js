import './App.css';
import LogoNavbar from './components/logo-navbar/logo-navbar.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import Home from './routes/home/home.route.jsx';
import Order from './routes/order/order.route.jsx';
import Faq from './routes/faq/faq.route.jsx';
import Contact from './routes/contact/contact.route.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className='App'>
      <LogoNavbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/order' element={<Order />}/>
          <Route path='/faq' element={<Faq />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App;

