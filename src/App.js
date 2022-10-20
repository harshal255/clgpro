
import './App.css';
import About from './components/About';
import Appsec from './components/Appsec';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Membersec from './components/Membersec';
import Storysec from './components/Storysec';
import Worksec from './components/Worksec';
import Worksec2 from './components/Worksec2';
import Meetsec from './components/Meetsec';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Worksec/>
      <Membersec/>
      <Storysec/>
      <Meetsec/>
      <Worksec2/>
      <Appsec/>
      <Footer/>

      
    </div>
  );
}

export default App;
