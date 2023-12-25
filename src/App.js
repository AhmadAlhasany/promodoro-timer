import React from "react";
import CircularProgressBar from "./Components/CircularProgressBar";
import Settings from "./Components/Settings";
import useSound from 'use-sound';
import fire from './Components/Tic-Tac-Mechanical-Alarm-Clock-chosic.com_.mp3'


function App() {
  const [value, setValue] = React.useState(15);
  const [wid, setWid] = React.useState(170);
  const [settings, setSettings] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(value*60)
  const [isPaused, setIsPaused] = React.useState(true)
  const [flip, setFlip] = React.useState(0)
  const [play, { stop }] = useSound(fire);

  React.useEffect(()=>{
    stop();
    setTimeLeft(value*60);
    setIsPaused(true);
  }, [value])
  
  React.useEffect(() => {
    const myInterval = setInterval(() =>{

      if(isPaused || timeLeft === 0)
        return
      else
        setTimeLeft(pre => pre - 1)
    }
    , 1000)
  
    return () => clearInterval(myInterval)
  }
  ,[isPaused, flip])
  
  React.useEffect(() =>{
  if(timeLeft === 0)
  {
    setFlip(pre => pre+1)
    play();
    setTimeout(()=>{
    stop();
    setTimeLeft(value*60);
    setIsPaused(true);
    }, 10000)
  }}, [timeLeft])

  const handleResize = () => {
    if(window.innerWidth <= 449)
      setWid(130);
    else
      setWid(170)
  }
  React.useEffect (() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])



  return (
    <div className="App">
      {settings ?
      <Settings value = {value} setValue = {setValue} setSettings = {setSettings}/> :
      <CircularProgressBar wid = {wid} value = {value} setSettings = {setSettings}
      timeLeft={timeLeft} setTimeLeft={setTimeLeft}
      isPaused={isPaused} setIsPaused={setIsPaused}
      />
      }
    </div>
  );
}

export default App;