import { useEffect, useState } from 'react';
import './App.css';
import video from './assets/FPO_ChipSequence.mp4';
import prueba from './assets/DESKTOP-SHORT.mp4';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  function handleAnimation(currentTime, start, end) {
    return currentTime >= start && currentTime < end ? "opacity-100" : "opacity-0";
  }

  useEffect(() => {
    function handleScroll() {
      const video = document.querySelector('video');
      const e = window.scrollY / (document.body.clientHeight - window.innerHeight)
      , r = video.duration * e;
      video.currentTime = r;
      setCurrentTime(r);
    }
    return window.addEventListener("scroll", handleScroll, {
      passive: !0
    }),
    () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div style={{width: "100%", display: "block"}}>
      <div className='w-full h-[650vh] md:h-[520vh] relative mt-[-137px] z-0'>
        <div className='w-full h-screen sticky left-0 top-0 z-0'>
          <div className={`transition-opacity ease-in-out duration-300 ${handleAnimation(currentTime,4,5)}`}>
            <div className='p-[5%] flex justify-center items-center w-[100%] h-[calc(45%_-_137px)] absolute left-0 top-[137px] z-2'>
              <div className='text-center'>
                <h1 className='text-black mb-4'>
                  Prueba
                </h1>
              </div>
            </div>
          </div>
          <video className='w-full h-full object-cover absolute left-0 top-0 z-[-2]' playsInline muted>
            <source src={prueba} type='video/mp4'/>
          </video>
        </div>
      </div>
    </div>
  );
}

export default App;
