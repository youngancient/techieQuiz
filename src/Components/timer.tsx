import { useEffect, useState } from "react";
import { TimerStyles } from "../styles/timer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { dataSelector, saveTimer, setSelectedOption, toggleIsQuestionAnswered } from "../redux/dataSlice";
import { IOption } from "../Constant/Constants";

export const Timer = () => {
  const {timerState, isQuestionAnswered,} = useAppSelector(dataSelector);
  const [timerValue, setTimerValue] = useState<number>(timerState);
  const dispatch = useAppDispatch();
   
  useEffect(() => {
    const timer =
      setInterval(() => {
        timerValue > 0 && setTimerValue(timerValue - 1);
      }, 1000);
      if(timerValue === 0){  
        dispatch(saveTimer(0));
        // when the time is up, we want to auto-selected any random wrong answer which is not part of the options tho
        if(!isQuestionAnswered){
          dispatch(toggleIsQuestionAnswered());
        }
        const randomOption:IOption ={
          id : 10,
          text : "not an option"
        };
        dispatch(setSelectedOption(randomOption));
      }
    return () => clearInterval(timer);
  }, [timerValue, dispatch, timerState]);

  return <TimerStyles $isLowTime={timerValue <= 5}>{timerValue}</TimerStyles>;
};


// how do i restart the timer?