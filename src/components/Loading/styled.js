import styled from "styled-components";

export const LoadingContainer = styled.div`
  background: none;
  display: inline-block;
  height: 100px;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;

  @keyframes ripples {
    0% {
      top: 48px;
      left: 48px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 9px;
      left: 9px;
      width: 78px;
      height: 78px;
      opacity: 0;
    }
  }

  .ripples div {
    position: absolute;
    border-width: 4px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ripples 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .ripples div:nth-child(1) {
    border-color: #162732;
  }

  .ripples div:nth-child(2) {
    border-color: #e31937;
    animation-delay: -0.5s;
  }

  .ripples {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }

  .ripples div {
    box-sizing: content-box;
  }
`;
