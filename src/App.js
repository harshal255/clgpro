
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Allmember from './components/Allmember';
import Blogs from './components/Blogs';
import Blogdetails from './components/Blogdetails';
// import About from './components/About';
// import Appsec from './components/Appsec';
// import Banner from './components/Banner';
// import Footer from './components/Footer';

// import Membersec from './components/Membersec';
// import Storysec from './components/Storysec';
// import Worksec from './components/Worksec';
// import Worksec2 from './components/Worksec2';
// import Meetsec from './components/Meetsec';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>

          <Route path="/" element={<Hero></Hero>} />
          <Route path="/allmembers" element={<Allmember></Allmember>} />
          <Route path="/blogs" element={<Blogs></Blogs>} />
          <Route path="/blogdetails" element={<Blogdetails></Blogdetails>} />
         
        </Routes>
      </Router>






    </div>
  );
}

export default App;
