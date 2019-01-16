import React, { Component } from 'react';
import Modal from 'react-modal';
import devices from './constants';
import fetchData from './js/fetchData';
import Chart from './Chart';
import './App.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

class App extends Component {
  state = {
    modalIsOpen: false,
    dataToPlot: null
  };

  handleClick = ID => {
    this.setState({ deviceID: ID, dataToPlot: fetchData(ID) });
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
    const { modalIsOpen, dataToPlot, deviceID } = this.state;
    return (
      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-heading">今天想使用什麼器材呢？</h2>
              <h3 className="section-subheading text-muted">
                請點擊器材了解使用情形
              </h3>
            </div>
          </div>
          <div className="row">
            {devices.map(device => (
              <div
                key={device.deviceID}
                onClick={() => this.handleClick(device.deviceID)}
              >
                <div className="col-md-4 col-sea">
                  <img src={device.imgUrl} alt="" />
                  <h3>{device.deviceName}</h3>
                  <h5 className="text-muted">Treadmill</h5>
                </div>
              </div>
            ))}
          </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {modalIsOpen && (
              <Chart dataToPlot={dataToPlot} deviceID={deviceID} />
            )}
          </Modal>
        </div>
      </section>
    );
  }
}

export default App;
