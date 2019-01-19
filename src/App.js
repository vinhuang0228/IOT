import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import devices from "./constants";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

export const Body = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  margin-top: 64px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
`;

const Item = styled.div`
  margin: 64px;
`;

const Heading = styled.h2`
  font-size: 36px;
  margin-bottom: 0px;
  color: #e55a54;
`;

const SubHeading = styled.h2`
  font-size: 16px;
  color: gray;
`;

const SubTitle = styled.h6`
  font-size: 24px;
  color: #e55a54;
  margin: 4px;
`;

const Img = styled.img`
  cursor: pointer;
  height: 200px;
  width: 200px;
  margin: 16px;
  border-radius: 50%;
`;

const App = () => (
  <Body>
      <Heading>今天想使用什麼器材呢？</Heading>
      <SubHeading>請點擊器材了解使用情形</SubHeading>
    <Row>
      {devices.map(device => (
        <Item key={device.deviceID}>
          <Link to={`/${device.deviceID}`}>
            <Img src={device.imgUrl} alt="" />
          </Link>
          <SubTitle>{device.deviceName}</SubTitle>
          <SubHeading>{device.deviceEng}</SubHeading>
        </Item>
      ))}
    </Row>
  </Body>
);

export default App;
