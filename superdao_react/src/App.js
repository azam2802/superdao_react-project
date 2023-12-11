import './App.css';
import Error404 from './components/ErrorPages/Error404';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/error' element={<Error404/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
