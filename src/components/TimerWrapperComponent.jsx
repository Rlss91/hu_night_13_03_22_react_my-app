import { useState, Fragment } from "react";
import TimerComponent from "./TimerComponent";
const TimerWrapperComponent = () => {
  const [showTime, setShowTime] = useState(true);
  const handleToggleClick = () => {
    setShowTime(!showTime);
  };
  return (
    <Fragment>
      {showTime && <TimerComponent />}
      <button className="btn btn-info" onClick={handleToggleClick}>
        Toggle
      </button>
    </Fragment>
  );
};

export default TimerWrapperComponent;
