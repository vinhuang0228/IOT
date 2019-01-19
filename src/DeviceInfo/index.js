import React from "react";
import Occupied from "../Occupied";
import Available from "../Available";

const DeviceInfo = ({
  match: {
    params: { deviceID }
  }
}) => (
  <div>
    {Math.random() < 0.5 ? (
      <Occupied deviceID={deviceID} />
    ) : (
      <Available deviceID={deviceID} />
    )}
  </div>
);

export default DeviceInfo;
