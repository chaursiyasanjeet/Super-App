import "./Timer.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Time Over</div>;
  }
  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
    </div>
  );
};

function Timer() {
  return (
    <div className="countdown-container">
      <CountdownCircleTimer
        size={140}
        strokeWidth={5}
        trailColor="##191e39"
        isPlaying
        duration={10}
        colors={["#ff6a6a"]}
        colorsTime={[10]}
        onComplete={() => ({ shouldRepeat: false })}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}
export default Timer;
