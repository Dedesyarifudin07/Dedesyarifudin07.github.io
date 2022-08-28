import './App.css';
import Home from './Components/Pages/Home/Home';


function App() {
  return (
    <div className="App">
      <div className='blur' style={{right:'0',top:'-30px'}}></div>
      <div className='blur' style={{left:'-40px',top:'50%'}}></div>
      <div className='blur' style={{left:'100%',top:'100%'}}></div>
      <Home/>
        
    </div>
  );
}

export default App;
