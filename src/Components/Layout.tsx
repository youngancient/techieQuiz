import { LayoutStyles } from "../styles/layout";
import { Main } from "./main";
import { dataSelector } from "../redux/dataSlice";
import { useAppSelector } from "../redux/hooks";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";
// import {Howl, Howler} from 'howler';
// import { useEffect } from "react";

// using howler omorrrrrr

const Layout = () => {
  const { bgTheme, hasEnded } = useAppSelector(dataSelector);
  const { width, height } = useWindowSize();

  // adding howler is giving issues!
  
  // const sound = new Howl({
  //   src : ['/bg-sound.mp3'],
  //   volume : 0.5
  // });
  // useEffect(()=>{
  //   console.log("changed");
  //   if(playQuizBgSound && hasStarted){
  //     sound.play();
  //   }
  //   if(hasStarted && !playQuizBgSound){
  //     console.log("i dey here");
  //     sound.mute(true);
  //   }
  // },[playQuizBgSound])

  return (
    <LayoutStyles color={bgTheme.color} supcolor={bgTheme.supcolor}>
      <div className="one"></div>
      <Main />
      <div className="two"></div>
      {hasEnded && <div className="ewe"><ReactConfetti width={width} height={height} /></div>}

      {/* If i fix this audio issue, then I am done >>> */}

    </LayoutStyles>
  );
};

export default Layout;

// What is left
// Timer
// sound effects!
