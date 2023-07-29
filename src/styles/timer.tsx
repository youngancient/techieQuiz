import { css, styled } from "styled-components";

interface ITimeStyle {
  $isLowTime?: boolean;
}
export const TimerStyles = styled.div<ITimeStyle>`
  z-index: 5;
  text-align: center;
  position: relative;
  font-family: Raleway;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  scale: 1;
  transition: 1s;
  margin-right: 0.25rem;
  ${(props) =>
    props.$isLowTime &&
    css`
      animation: scaler 2s linear infinite;
      color: #c73e1d;
    `}
  @keyframes scaler {
    0% {
      scale: 1;
    }
    25% {
      scale: 1.2;
    }
    50% {
      scale: 1.5;
    }
    75% {
      scale: 1.2;
    }
    100% {
      scale: 1;
    }
  }
`;
