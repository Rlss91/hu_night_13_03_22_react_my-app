import { useState, useEffect } from "react";
const TimerComponent = () => {
  const [date, setDate] = useState(new Date());
  const [parity, setParity] = useState("");
  useEffect(() => {
    let intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  useEffect(() => {
    if (date.getSeconds() % 2) {
      setParity("odd");
    } else {
      setParity("even");
    }
  }, [date]);

  return (
    <div>
      {date.toLocaleTimeString()}
      <br /> {parity}
    </div>
  );
};

export default TimerComponent;
