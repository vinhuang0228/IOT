import React, { Component } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import Monster from "../Monster";
import { customStyles } from "../constants";
import fetchData from "../js/fetchData";
import Chart from "../Chart";
import { Body } from "../App";

const Button = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  background-color: white;
  color: #E55A54;
  font-size: 15px;
  transition-duration: 0.8s;
  border: solid 2px;
  border-radius: 10px;

  &:hover {
    background-color: #f66b65;
    color: white;
  }
`;

class Occupied extends Component {
  state = {
    modalIsOpen: false,
    dataToPlot: null
  };

  handleClick = () => {
    this.setState({ dataToPlot: fetchData(this.props.deviceID) });
    // open up a modal
    this.openModal();
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  // afterOpenModal = () => {

  // }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    const { modalIsOpen, dataToPlot } = this.state;
    return (
      <Body>
        <Monster title="使用中" subTitle="Occupied" inUse />
        <Button onClick={this.handleClick}>Time Analysis >></Button>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {modalIsOpen && (
              <Chart dataToPlot={dataToPlot} deviceID={this.props.deviceID} />
            )}
          </Modal>
        </div>
      </Body>
    );
  }
}
export default Occupied;
