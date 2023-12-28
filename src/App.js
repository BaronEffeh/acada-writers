// import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <><div className="App">
      <Navbar />
    </div>
      <div className="content">
        <Home />
      </div>
      <div className="footer">
        <Footer />
      </div></>
  );
}

export default App;
