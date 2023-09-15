import React, { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
function Timer({ stopwatchOffset }) {
  const { seconds, minutes, hours, days } = useStopwatch({
    autoStart: true,
    offsetTimestamp: stopwatchOffset,
  });

  return (
    <div className="flex items-center gap-3 justify-center text-center px-2 lg:px-5 xl:px-10 flex-wrap lg:flex-nowrap">
      <div className="heroBottomBox">
        <h2>{days}</h2>
        <p>Days</p>
      </div>
      <div className="heroBottomBox">
        <h2>{hours}</h2>
        <p>Hours</p>
      </div>
      <div className="heroBottomBox">
        <h2>{minutes}</h2>
        <p>Minutes</p>
      </div>
      <div className="heroBottomBox">
        <h2>{seconds}</h2>
        <p>Seconds</p>
      </div>
    </div>
  );
}

export default Timer;
