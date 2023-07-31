/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { LayoutStyles } from "../styles/layout";
import { Main } from "./main";
import { dataSelector, setPlayCorrectAnswerSound } from "../redux/dataSlice";
import { useAppSelector } from "../redux/hooks";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

/* using howler omorrrrrr, 
 guy that thing no gree work, 
i had to refer back to native HTML Audio Element :

*/

const Layout = () => {
  const {
    bgTheme,
    hasEnded,
    hasStarted,
    playQuizBgSound,
    playCorrectAnswerSound,
  } = useAppSelector(dataSelector);
  const { width, height } = useWindowSize();
  const dispatch = useDispatch();
  // adding howler is giving issues!

  /*Map out all our audion files */
  const audioFiles = [
    "/bg-sound.mp3",
    "/correct.mp3",
    "/cut-idan.mp3",
    "/cut-lionishere.mp3",
  ];

  const [audioIndex, setAudioIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | any>(null);
  const [loopSound, setLoopSound] = useState<boolean>(true);

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const correctSound = new Audio(audioFiles[1]);

  const playCorrectSound = () => {
    correctSound.load();
    correctSound.play();
  };

  useEffect(() => {
    audioRef?.current?.setAttribute("src", audioFiles[audioIndex]);

    /* Play the sound once the user clicks the start button */
    if (playQuizBgSound && hasStarted) {
      setLoopSound(true);
      setAudioIndex(0);
      audioRef.current?.play();
      audioRef.current.volume = 0.7;
    }

    /*Play the IDAN sound when the game ends*/
    if (hasEnded) {
      const endSound = new Audio(audioFiles[getRandomNumber(2, 3)]);
      endSound.play();
    }
  }, [playQuizBgSound, hasStarted, hasEnded]);

  useEffect(() => {
    if (hasStarted) {
      playCorrectSound();
    }
    setTimeout(() => {
      dispatch(setPlayCorrectAnswerSound(false));
    }, 0);
  }, [playCorrectAnswerSound]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    <LayoutStyles color={bgTheme.color} supcolor={bgTheme.supcolor}>
      <audio ref={audioRef} src={audioFiles[audioIndex]} loop={loopSound} />
      <div className="one"></div>
      <Main />
      <div className="two"></div>
      {hasEnded && (
        <div className="ewe">
          <ReactConfetti width={width} height={height} />
        </div>
      )}

      {/* If i fix this audio issue, then I am done,
      I would try my best to fix it :) >>> */}
    </LayoutStyles>
  );
};

export default Layout;

// What is left
// Timer
// sound effects!
