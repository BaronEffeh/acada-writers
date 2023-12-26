// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <div className="content">
    //       <Switch>
    //         <Route exact path="/">
    //           <Home />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
