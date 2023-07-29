import { css, styled } from "styled-components";
import { motion } from "framer-motion";
import { compVariants } from "../Animations/Animations";

export const MainStyles = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 5;
  min-width: 30vw;
  max-width: 540.37px;
  h1 {
    font-family: Raleway;
    color: #fff;
    font-size: 2.25rem;
  }
  @media (max-width: 998px) {
    width: 60%;
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 767px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    font-size: 1.8rem;
    max-width: 348px;
    width: 90%;
  }
  @media (max-width: 370px) {
    width: 95%;
  }
`;

interface ICodeStyle {
  color?: string;
}
export const WelcomeStyles = styled(motion.div).attrs<ICodeStyle>(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: compVariants,
}))`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .xx {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .code {
    font-size: 3rem;
    display: flex;
    justify-content: left;
    width: 100%;
    fill: ${(props) => props.color};
  }
  h2, h3 {
    color: #1d355d;
    font-family: Raleway;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 4px;
  }
  .start button {
    width: 13.0625rem;
    height: 3.875rem;
    color: #1d355d;
    font-family: DM Sans;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 0.75rem;
    border: 2px solid #1d355d;
    background: transparent;
  }
  .smileys {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
  }
  .feel p {
    font-family: DM Sans;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #1d355d;
  }
  .select {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .select h3 {
    font-family: Raleway;
    font-size: 1.5rem;
  }
  .start {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  @media (max-width: 767px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export const ResultStyles = styled(motion.div).attrs(()=>({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: compVariants,
}))`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  .result {
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
  }
  img {
    object-fit: cover;
  }
  h2 {
    color: #1d355d;
    font-family: Raleway;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    font-family: DM Sans;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #1d355d;
  }
  p strong {
    color: #6fcf97;
    font-size: 2.25rem;
    font-family: Raleway;
  }
  button {
    width: 13.0625rem;
    height: 3.875rem;
    color: #1d355d;
    font-family: DM Sans;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 0.75rem;
    border: 2px solid #1d355d;
    background: transparent;
  }
  @media (max-width: 767px) {
    h2 {
      font-size: 2rem;
    }
  }
`;
export const DropdownStyles = styled.div`
  border: 2px solid rgba(96, 102, 208, 0.8);
  border-radius: 8px;
  width: 70px;
  position: relative;
  .selected {
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    padding: 0.25rem;
  }
  .selected p {
    font-family: DM Sans;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: color: #1d355d;
    fill: #1d355d;
  }
  .list {
    position: absolute;
    border: 2px solid #1d355d;
    top: -250%;
  }
  @media (max-width: 767px){
    .list{
      top: -270%;
    }
  }
`;
interface ISelectedStyle {
  $isSelected: boolean;
}
export const ArrowStyles = styled.div<ISelectedStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    transition: 0.3s;
  }
  ${(props) =>
    !props.$isSelected &&
    css`
      svg {
        transform: rotateZ(180deg);
      }
    `}
`;
export interface IDropdownItemStyle extends ISelectedStyle {
  $isLast?: boolean;
}
export const DropdownItemStyles = styled.div<IDropdownItemStyle>`
  cursor: pointer;
  width: 100px;
  background: #fff;
  padding: 0.25rem;
  font-family: DM Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(96, 102, 208, 0.8);
  ${(props) =>
    props.$isSelected &&
    css`
      span {
        color: green;
      }
    `}
  ${(props) =>
    !props.$isLast &&
    css`
      border-bottom: 2px solid rgba(96, 102, 208, 0.8);
    `}
`;
interface IEmojiStyle {
  color: string;
  $isSelected: boolean;
}
export const EmojiStyles = styled.div<IEmojiStyle>`
  font-size: 2.5rem;
  cursor: pointer;
  svg {
    fill: rgba(96, 102, 208, 0.8);
  }
  ${(props) =>
    props.$isSelected &&
    css`
      svg {
        fill: ${props.color};
      }
    `}
  &:hover > svg {
    fill: ${(props) => props.color};
  }
`;
export const FormLayoutStyles = styled.div`
  padding: 2rem;
  border-radius: 1.5rem;
  background: #fff;
  width: 100%;
  min-height: 60vh;
  .adventure {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 370px) {
    min-wdth: 280px;
    .adventure img {
      width: 96px;
      height: 80px;
      object-fit: cover;
    }
    .adventure {
      top: 1rem;
    }
  }
  @media (max-width: 500px) {
    padding: 1rem;
    .adventure {
      gap: 0.25rem;
      top: -0.75rem;
    }
  }
`;

// font-family: poppins;
export interface IQuestionStyles {
  img?: string;
}
export const QuestionStyle = styled(motion.div).attrs<IQuestionStyles>(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: compVariants,
}))`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  img {
    width: 84px;
    height: 64px;
    object-fit: cover;
  }
  .no-img{
    height: 40px;
    border: 2px solid #000;
  }
  .option-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  h3 {
    font-family: DM Sans;
    color: #1d355d;
    font-family: DM Sans;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .img {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .next {
    display: flex;
    justify-content: flex-end;
  }
  .next button {
    border-radius: 0.75rem;
    background: #f9a826;
    width: 7.25rem;
    height: 3.5rem;
    box-shadow: 0px 2px 4px 0px rgba(252, 168, 47, 0.4);
    color: #fff;
    font-family: DM Sans;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  @media (max-width: 500px) {
    gap: 1rem;
    .option-list {
      gap: 0.75rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export interface IOptionStyle {
  $isSelected?: boolean;
  $isSelectedOptionWrong?: boolean;
  $isCorrect?: boolean;
}
export const OptionStyle = styled(motion.button)<IOptionStyle>`
  display: flex;
  height: 3.5rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(96, 102, 208, 0.7);
  background: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  justify-content: space-between;
  .choice {
    display: flex;
    gap: 2.5rem;
    align-items: center;
  }
  color: rgba(96, 102, 208, 0.8);
  span {
    font-family: DM Sans;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p {
    font-family: DM Sans;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  @keyframes blinkey {
    0% {
      color: #fff;
      background: #60bf88;
    }
    25% {
      background: transparent;
      color: rgba(96, 102, 208, 0.8);
    }
    50% {
      color: #fff;
      background: #60bf88;
    }
    75% {
      background: transparent;
      color: rgba(96, 102, 208, 0.8);
    }
    100% {
      color: #fff;
      background: #60bf88;
    }
  }
  ${(props) =>
    props.$isSelected &&
    css`
      background: #f9a826;
      color: #fff;
      border: none;
    `}
  @media (max-width: 500px) {
    span {
      font-size: 1.25;
    }
    p {
      font-size: 1rem;
    }
  }
  ${(props) =>
    props.$isSelectedOptionWrong &&
    css`
      color: #fff;
      border: none;
      background: #ea8282;
    `}
  ${(props) =>
    props.$isCorrect &&
    css`
      color: #fff;
      border: none;
      background: #60bf88;
      animation: blinkey 0.75s linear;
    `}
`;
