import logo from './logo.svg';
import './App.css';
import video from './assets/FPO_ChipSequence.mp4';
import prueba from './assets/DESKTOP-SHORT.mp4';

function App() {
  return (
    <div style={{width: "100%", display: "block"}}>
      <div className='w-full h-[650vh] md:h-[520vh] relative mt-[-137px] z-0'>
        <div className='w-full h-screen sticky left-0 top-0 z-0'>
          <video className='w-full h-full object-cover absolute left-0 top-0 z-[-2]' playsInline muted controls>
            <source src={prueba} type='video/mp4'/>
          </video>
        </div>
      </div>
    </div>
  );
}

export default App;
