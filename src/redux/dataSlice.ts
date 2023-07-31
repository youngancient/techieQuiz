/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  DropdownList,
  EmojiList,
  IEmoji,
  IOption,
  IQuestion,
  Questions,
} from "../Constant/Constants";
import { RootState } from "./store";
import { IDropdownItem } from "../Components/main";
import {Howl, Howler} from "howler";

interface IDataSlice {
  questions: IQuestion[];
  attemptedQuestionsId: number[] | null;
  hasStarted: boolean | null;
  numberOfQuestionsSelected: number | null;
  questionNoDropdownlist: IDropdownItem[];
  showQuestionNoList: boolean;
  isQuestionAnswered: boolean;
  totalNumberOfAllQuestions: number;
  emojiList: IEmoji[];
  bgTheme: IBgTheme;
  selectedOption: IOption | null;
  selectedQuestionAnswerId: number | null;
  hasEnded: boolean;
  hasFinishedQuestions: boolean;
  playerScore: number;
  timerState: number;
  playQuizBgSound: boolean;
  playQuizBgSoundInstance: Howl | any;
}
export interface IBgTheme {
  color?: string;
  supcolor?: string;
}
const initialState: IDataSlice = {
  questions: Questions,
  attemptedQuestionsId: null,
  hasStarted: false,
  numberOfQuestionsSelected: null,
  questionNoDropdownlist: DropdownList,
  showQuestionNoList: false,
  isQuestionAnswered: false,
  totalNumberOfAllQuestions: Questions.length,
  emojiList: EmojiList,
  bgTheme: { color: "#575a89", supcolor: "" }, // the supcolor will be assigned based on te theme the user selects
  selectedOption: null,
  selectedQuestionAnswerId: null,
  hasEnded: false,
  hasFinishedQuestions: false,
  playerScore: 0,
  timerState: 10,
  playQuizBgSound : false,
  playQuizBgSoundInstance : null
};

const generateRandom = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    selectQuestionAtRandom: (state) => {
      console.log("hello", state.questions);
    },
    setHasStarted: (state, action: PayloadAction<boolean | null>) => {
      state.hasStarted = action.payload;
    },
    setHasEnded: (state, action: PayloadAction<boolean>) => {
      state.hasEnded = action.payload;
    },
    selectQuestionNumber: (state, { payload }) => {
      const newQuestionNoList = state.questionNoDropdownlist.map((ele) => {
        if (ele.id === payload) {
          return { ...ele, $isSelected: true };
        } else {
          return { ...ele, $isSelected: false };
        }
      });
      state.questionNoDropdownlist = newQuestionNoList;
    },
    setDefaultQuestionNumber: (state) => {
      const comp = state.questionNoDropdownlist.find(
        (ele) => ele.$isSelected == true
      );
      if (comp) {
        state.numberOfQuestionsSelected = comp.value;
      }
    },
    toggleShowQuestionList: (state) => {
      state.showQuestionNoList = !state.showQuestionNoList;
    },
    toggleIsQuestionAnswered: (state) => {
      state.isQuestionAnswered = !state.isQuestionAnswered;
    },
    setAttemptQuestion: (state) => {
      // generate a random number between 1 and the length of the questions array
      let randomId = generateRandom(1, state.totalNumberOfAllQuestions);
      // we start from the default attempted questions which is null at first
      let attemptedQs = state.attemptedQuestionsId;
      // if null, we pass the random integer without caring about duplicates
      if (attemptedQs === null) {
        attemptedQs = [randomId];
        const newQuestionList = state.questions.map((ele) => {
          if (ele.id === randomId) {
            return { ...ele, attemptQuestion: true };
          } else {
            return { ...ele, attemptQuestion: false };
          }
        });
        state.questions = newQuestionList;
      } else {
        if (state.numberOfQuestionsSelected !== null) {
          // if the list isnt null, there is a possiblity of finding a duplicate
          if (attemptedQs.length < state.numberOfQuestionsSelected) {
            while (attemptedQs.includes(randomId)) {
              randomId = generateRandom(1, state.totalNumberOfAllQuestions);
            }
            attemptedQs = [...attemptedQs, randomId];
            // this random number has passed all tests, we use to set the questions
            const newQuestionList = state.questions.map((ele) => {
              if (ele.id === randomId) {
                return { ...ele, attemptQuestion: true };
              } else {
                return { ...ele, attemptQuestion: false };
              }
            });
            state.questions = newQuestionList;
          }
          if (state.numberOfQuestionsSelected - attemptedQs.length === 0) {
            state.hasFinishedQuestions = true;
          }
        }
      }
      state.attemptedQuestionsId = attemptedQs;
    },
    setActiveEmoji: (state, { payload }) => {
      const newEmojiList = state.emojiList.map((ele) => {
        if (ele.id === payload) {
          state.bgTheme = { color: ele.color, supcolor: ele.supcolor };
          return { ...ele, isSelected: true };
        } else {
          return { ...ele, isSelected: false };
        }
      });
      state.emojiList = newEmojiList;
    },
    setSelectedOption: (state, action: PayloadAction<IOption>) => {
      if (state.selectedOption === null) {
        state.selectedOption = action.payload;
      }
    },
    resetSelectedOption: (state) => {
      state.selectedOption = null;
    },
    setSelectedQuestionAnswerId: (
      state,
      action: PayloadAction<number | null>
    ) => {
      state.selectedQuestionAnswerId = action.payload;
    },
    resetQuizParameters: (state) => {
      state.attemptedQuestionsId = null;
      state.showQuestionNoList = false;
      state.isQuestionAnswered = false;
      state.hasFinishedQuestions = false;
    },
    incrementPlayerScore: (state) => {
      state.playerScore += 1;
    },
    resetPlayerScore: (state) => {
      state.playerScore = 0;
    },
    saveTimer :(state, action :PayloadAction<number>)=>{
      state.timerState = action.payload;
    },
    resetTimer:(state)=>{
      state.timerState = 10;
    },
    setPlayQuizBgSound :(state, action:PayloadAction<boolean>)=>{
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const shouldPlay = action.payload;
      
      // if(shouldPlay){
      //   if(!state.playQuizBgSound){
      //     //create a Howl instance
      //     const bgMusic = new Howl({
      //       src: "./bg-sound.mp3",
      //       loop: true,
      //       volume: 0.5,
      //     });

      //     bgMusic.play();
      //     // Save the Howl instance in the state to access it for stopping later
      //     state.playQuizBgSoundInstance = bgMusic;
      //   }
      // }else{
      //    //if the music should stop, stop it
      //    if(state.playQuizBgSound){
      //       state.playQuizBgSoundInstance.stop();
      //       state.playQuizBgSoundInstance = null;
      //    }
      // }
      
      state.playQuizBgSound = shouldPlay;
      console.log(state.playQuizBgSound);
    }
  },
});

export const {
  selectQuestionAtRandom,
  setHasStarted,
  setHasEnded,
  selectQuestionNumber,
  setDefaultQuestionNumber,
  toggleShowQuestionList,
  toggleIsQuestionAnswered,
  setAttemptQuestion,
  setActiveEmoji,
  setSelectedOption,
  resetSelectedOption,
  setSelectedQuestionAnswerId,
  incrementPlayerScore,
  resetPlayerScore,
  resetQuizParameters,
  resetTimer,
  saveTimer,
  setPlayQuizBgSound
} = dataSlice.actions;
export const dataSelector = (state: RootState) => state.data;
export default dataSlice.reducer;
