import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route , Routes , HashRouter } from 'react-router-dom';
import Comment from './components/Comment';
import Footer from './components/Footer';
import Navbar from './Navbar';

function App() {
  const url = "/"
  return (
    <div className="App">
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route exact path={url} element={<Home />} />
        <Route exact path='/comment/:id' element={<Comment />} />
      </Routes>
      <Footer />
      </HashRouter>
      
    </div>
  );
}

export default App;
