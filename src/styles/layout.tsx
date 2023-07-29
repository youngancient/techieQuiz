import { css, styled } from "styled-components";
import { IBgTheme } from "../redux/dataSlice";

export const LayoutStyles = styled.div<IBgTheme>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #575a89;
  height: 100vh;
  width: 100vw;
  gap: 3rem;
  overflow: hidden;
  .one,
  .two {
    position: absolute;
    width: 60vw;
    height: 80vh;
    border-radius: 2.0625rem;
    background: rgba(96, 102, 208, 0.7);
    z-index: 0;
    transition: 1s;
  }
  @keyframes moveOne {
    from {
      right: -50%;
      opacity: 0.5;
    }
    to {
      right: -20%;
      opacity: 1;
    }
  }
  @keyframes moveTwo {
    from {
      bottom: -40rem;
      opacity: 0.5;
    }
    to {
      bottom: -22rem;
      opacity: 1;
    }
  }
  .one {
    top: 0;
    right: -20%;
    top: -5rem;
    transform: rotate(30deg);
    animation: moveOne 1s linear;
  }
  .two {
    bottom: 0;
    left: 0;
    bottom: -22rem;
    transform: rotate(30deg);
    animation: moveTwo 1s linear;
  }
  .audio{
    // display: none;
  }
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
      .one,
      .two {
        background: ${props.supcolor};
      }
    `}
  .ewe{
    z-index: 10;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1.5rem;
    .one,
    .two {
      height: 50vh;
      width: 80vw;
    }
    .one {
      // margin-top: 0;
    }
    .two {
      margin-bottom: -5rem;
    }
  }
  @media (max-width: 500px) {
  }
`;
