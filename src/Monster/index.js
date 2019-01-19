import React from "react";
import styled, { css, keyframes } from "styled-components";

const eyemove = keyframes`
  0%,
  10% {
    transform: translate(50%);
  }
  90%,
  100% {
    transform: translate(-50%);
  }`;

const eyemoveAnimationRule = css`
  ${eyemove} 1.6s infinite alternate;
`;

const jumping = keyframes`
50% {
  top: 0;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}
100% {
  top: -50px;
  box-shadow: 0px 120px 50px rgba(0, 0, 0, 0.2);
}`;

const jumpingAnimationRule = css`
  ${jumping} 0.8s infinite alternate;
`;

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 110px;
  height: 110px;
  background-color: ${props => (props.inUse ? "#E55A54" : "#06590e")};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 16px;
  margin-top: 48px;
  position: relative;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  animation: ${jumpingAnimationRule};

  &:before,
  &:after {
    content: "";
    display: block;
    width: 20%;
    height: 10px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: -10px;
    border-radius: 10px;
  }

  &:before {
    transform: translateX(-70%) rotate(45deg);
  }

  &:after {
    transform: translateX(-30%) rotate(-45deg);
  }
`;

const Title = styled.h2`
  color: ${props => (props.inUse ? "#E55A54" : "#06590e")};
  padding: 8px;
  margin: 4px;
`;

const Eye = styled.div`
  width: 40%;
  height: 40%;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Eyeball = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: ${props => (!props.inUse ? "#E55A54" : "#06590e")};
  animation: ${eyemoveAnimationRule};
`;

const Mouth = styled.div`
  width: 32%;
  height: 12px;
  background-color: white;
  border-radius: 12px;
  margin-top: 15%;
`;

const Monster = ({ title, subTitle, inUse }) => (
  <OuterWrapper>
    <Wrapper inUse={inUse}>
      <Eye>
        <Eyeball inUse={inUse} />
      </Eye>
      <Mouth />
    </Wrapper>
    <Title inUse={inUse}>{title} {subTitle}</Title>
  </OuterWrapper>
);

export default Monster;
