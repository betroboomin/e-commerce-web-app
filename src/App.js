import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import Routing from './config/routes';
import 'swiper/css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />

        <Routing />

        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;