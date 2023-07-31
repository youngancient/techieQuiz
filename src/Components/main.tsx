/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FunctionComponent, useEffect, useState } from "react";
import {
  WelcomeStyles,
  MainStyles,
  FormLayoutStyles,
  QuestionStyle,
  OptionStyle,
  DropdownStyles,
  DropdownItemStyles,
  IDropdownItemStyle,
  ResultStyles,
} from "../styles/main";
import {
  Arrow,
  Tick,
  Code,
  CorrectIcon,
  CryEmoji,
  FailedIcon,
  FrownEmoji,
  JoyEmoji,
  SmileEmoji,
} from "./icons";
import { Timer } from "./timer";
import {
  DropdownList,
  IEmoji,
  IOption,
  IQuestion,
} from "../Constant/Constants";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  dataSelector,
  incrementPlayerScore,
  resetPlayerScore,
  resetQuizParameters,
  resetSelectedOption,
  resetTimer,
  selectQuestionNumber,
  setAttemptQuestion,
  setDefaultQuestionNumber,
  setHasEnded,
  setHasStarted,
  setPlayQuizBgSound,
  setPlayCorrectAnswerSound,
  setSelectedOption,
  setSelectedQuestionAnswerId,
  toggleIsQuestionAnswered,
  toggleShowQuestionList,
} from "../redux/dataSlice";

export const Main = () => {
  const { questionNoDropdownlist } = useAppSelector(dataSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setDefaultQuestionNumber());
  }, [dispatch, questionNoDropdownlist]);
  return (
    <MainStyles>
      <h1>TECHIE QUIZ</h1>
      <FormLayout />
    </MainStyles>
  );
};

export const Intro = () => {
  const { emojiList, bgTheme } = useAppSelector(dataSelector);
  const dispatch = useAppDispatch();
  const startQuiz = () => {
    dispatch(setAttemptQuestion());
    dispatch(setPlayQuizBgSound(true));
    dispatch(setHasStarted(true));
  };
  return (
    <WelcomeStyles color={bgTheme.color}>
      <div className="xx">
        <div className="code">
          <Code />
        </div>
        <h2>WELCOME IDAN!</h2>
      </div>
      <div className="feel">
        <p>How are you today?</p>
        <div className="smileys">
          {emojiList.map((ele:any, index:number) => (
            <Emoji
              key={index}
              id={ele.id}
              isSelected={ele.isSelected}
              color={ele.color}
              supcolor={ele.supcolor}
            />
          ))}
        </div>
      </div>
      <div className="start">
        <div className="select">
          <h3>Questions</h3>
          <DropDown />
        </div>
        <button type="button" onClick={startQuiz}>
          Start Quiz
        </button>
      </div>
    </WelcomeStyles>
  );
};

export const Emoji: FunctionComponent<IEmoji> = ({
  id,
  isSelected,
  color,
  supcolor,
}) => {
  return (
    <>
      {id === 0 && (
        <SmileEmoji
          isSelected={isSelected}
          id={id}
          color={color}
          supcolor={supcolor}
        />
      )}
      {id === 1 && (
        <JoyEmoji
          isSelected={isSelected}
          id={id}
          color={color}
          supcolor={supcolor}
        />
      )}
      {id === 2 && (
        <FrownEmoji
          isSelected={isSelected}
          id={id}
          color={color}
          supcolor={supcolor}
        />
      )}
      {id === 3 && (
        <CryEmoji
          isSelected={isSelected}
          id={id}
          color={color}
          supcolor={supcolor}
        />
      )}
    </>
  );
};
export interface ISelected {
  isSelected: boolean;
}

export const DropDown = () => {
  const {
    questionNoDropdownlist,
    numberOfQuestionsSelected,
    showQuestionNoList,
  } = useAppSelector(dataSelector);
  const dispatch = useAppDispatch();
  const toggleSelected = () => {
    dispatch(toggleShowQuestionList());
  };
  return (
    <DropdownStyles>
      <div className="selected" onClick={toggleSelected}>
        <p>{numberOfQuestionsSelected}</p>
        <Arrow isSelected={showQuestionNoList} />
      </div>
      {showQuestionNoList && (
        <div className="list">
          {questionNoDropdownlist.map((ele:any, index:number) => (
            <DropDownItem
              $isSelected={ele.$isSelected}
              value={ele.value}
              $isLast={index === DropdownList.length - 1}
              key={index}
              id={ele.id}
            />
          ))}
        </div>
      )}
    </DropdownStyles>
  );
};
export interface IDropdownItem extends IDropdownItemStyle {
  value: number;
  id: number;
}
export const DropDownItem: FunctionComponent<IDropdownItem> = ({
  $isSelected,
  $isLast,
  value,
  id,
}) => {
  const dispatch = useAppDispatch();
  const handleSelect = () => {
    dispatch(selectQuestionNumber(id));
    dispatch(toggleShowQuestionList());
  };
  return (
    <DropdownItemStyles
      $isSelected={$isSelected}
      $isLast={$isLast}
      onClick={handleSelect}
    >
      <span>{value}</span>
      {$isSelected && <Tick />}
    </DropdownItemStyles>
  );
};
export const FormLayout = () => {
  const { hasStarted, questions, hasEnded } = useAppSelector(dataSelector);
  return (
    <>
      {!hasEnded && (
        <FormLayoutStyles>
          <div className="adventure">
            <img src="/adventure.svg" alt="koto" />
          </div>
          <div className="contents">
            {hasStarted &&
              questions.map((ele:any, index:number) => (
                <Question
                  id={ele.id}
                  img={ele.img}
                  question={ele.question}
                  options={ele.options}
                  answer={ele.answer}
                  key={index}
                  attemptQuestion={ele.attemptQuestion}
                />
              ))}
            {!hasStarted && <Intro />}
          </div>
        </FormLayoutStyles>
      )}
      {hasEnded && (
        <FormLayoutStyles>
          <Result />
        </FormLayoutStyles>
      )}
    </>
  );
};
const calculatePercent = (score: number, total: number) => {
  const value = (score * 100) / total;
  return Math.round((value + Number.EPSILON) * 100) / 100;
};
export const Result = () => {
  const { playerScore, numberOfQuestionsSelected } =
    useAppSelector(dataSelector);
  let percent = 0;
  if (numberOfQuestionsSelected !== null) {
    percent = calculatePercent(playerScore, numberOfQuestionsSelected);
  }

  const dispatch = useAppDispatch();
  const goToIntro = () => {
    dispatch(resetPlayerScore());
    dispatch(setHasEnded(false));
    dispatch(setHasStarted(false));
  };
  return (
    <ResultStyles>
      <img src="/result.svg" alt="result" />
      <div className="result">
        <h2>Results</h2>
        <p>
          You scored{" "}
          <strong>
            {playerScore}/{numberOfQuestionsSelected}
          </strong>{" "}
          ({percent}%)
        </p>
      </div>
      <button type="button" onClick={goToIntro}>
        Try again
      </button>
    </ResultStyles>
  );
};
export const Question: FunctionComponent<IQuestion> = ({
  id,
  question,
  img,
  options,
  answer,
  attemptQuestion,
}) => {
  const { isQuestionAnswered, hasFinishedQuestions } =
    useAppSelector(dataSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (attemptQuestion) {
      dispatch(setSelectedQuestionAnswerId(answer));
    }
  }, [attemptQuestion, answer, id, dispatch]);

  const attemptAnotherQuestion = () => {
    if (hasFinishedQuestions) {
      dispatch(setHasEnded(true));
      dispatch(setHasStarted(null));
      dispatch(resetQuizParameters());
      dispatch(setPlayQuizBgSound(false));
    } else {
      dispatch(setAttemptQuestion());
      dispatch(toggleIsQuestionAnswered());
    }
    dispatch(resetTimer());
    dispatch(resetSelectedOption());
  };
  return (
    <>
      {attemptQuestion && (
        <QuestionStyle>
          <div className="img">
            {img && <img src={img} alt="morocco" />}
            {/* {!img && <div className="no-img"></div>} */}
            <Timer />
          </div>
          <h3>{question}</h3>
          <div className="option-list">
            {options.map((ele, index) => (
              <Option id={ele.id} text={ele.text} key={index} />
            ))}
          </div>
          <div className="next">
            {isQuestionAnswered && (
              <button type="button" onClick={attemptAnotherQuestion}>
                {hasFinishedQuestions ? "Finish!" : "Next"}
              </button>
            )}
          </div>
        </QuestionStyle>
      )}
    </>
  );
};

const getLetter = (num: number) => {
  if (num === 1) {
    return "A";
  }
  if (num === 2) {
    return "B";
  }
  if (num === 3) {
    return "C";
  }
  if (num === 4) {
    return "D";
  }
};
export const Option: FunctionComponent<IOption> = ({ id, text }) => {
  const dispatch = useAppDispatch();
  const { selectedOption, isQuestionAnswered, selectedQuestionAnswerId } =
    useAppSelector(dataSelector);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>();
  
  // I need a 0.75s timer which would switch states from the selected question to like mark wrong and mark correctly
  useEffect(() => {
    if (selectedOption) {
      setTimeout(() => {
        setIsCorrect(selectedQuestionAnswerId === id);
        if (id === selectedOption?.id && selectedQuestionAnswerId === id) {
          dispatch(incrementPlayerScore());
          dispatch(setPlayCorrectAnswerSound(true));
        }
      }, 750);
    }
  }, [selectedQuestionAnswerId, selectedOption]);

  const handleOptionSelection = () => {
    if (!isQuestionAnswered) {
      dispatch(toggleIsQuestionAnswered());
    }
    const option: IOption = {
      id: id,
      text: text,
    };
    dispatch(setSelectedOption(option));
  };

  return (
    <OptionStyle
      onClick={handleOptionSelection}
      $isSelected={id === selectedOption?.id}
      $isSelectedOptionWrong={id === selectedOption?.id && isCorrect === false}
      $isCorrect={isCorrect}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
    >
      <div className="choice">
        <span>{getLetter(id)}</span>
        <p>{text}</p>
      </div>
      {/* this is for marking the selected option wrong or right */}
      {id === selectedOption?.id && isCorrect === false && <FailedIcon />}
      {/* in case the selected option is wrong, this marks the correct answer right */}
      {isCorrect && <CorrectIcon />}
    </OptionStyle>
  );
};
