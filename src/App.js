import About from './Components/About';
import Connections from './Components/Connections';
import Detail from './Components/Detail';
import Help from './Components/Help';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div style={{display:'flex' ,flexDirection:'column',justifyContent:'center'}}>
      <Navbar/>
      <About/>
      <Detail/>
      <Services/>
      <Connections/>
      <Testimonials/>
      <Help/>
    </div>
  );
}

export default App;
