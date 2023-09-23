import "./Timer.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import increase from "../../assets/increase.png";
import decrease from "../../assets/decrease.png";
import tone from "../../assets/timeUp.mp3";
import { useState, useRef } from "react";

function Timer() {
  const sound = useRef(null);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hours, SetHours] = useState(0);
  const [playing, setPlaying] = useState(false);

  const increaseHour = () => {
    hours < 23 ? SetHours(hours + 1) : SetHours(0);
  };
  const decreaseHour = () => {
    hours > 1 ? SetHours(hours - 1) : SetHours(23);
  };

  const increaseMinute = () => {
    minute < 59 ? setMinute(minute + 1) : setMinute(0);
  };
  const decreaseMinute = () => {
    minute > 1 ? setMinute(minute - 1) : setMinute(59);
  };
  const increaseSecond = () => {
    second < 59 ? setSecond(second + 1) : setSecond(0);
  };
  const decreaseSecond = () => {
    second > 1 ? setSecond(second - 1) : setSecond(59);
  };

  const handlePauseStart = () => {
    let totaltime = second + hours * 3600 + minute * 60;
    if (totaltime === 0) {
      setPlaying(false);
      return;
    }
    setPlaying((prev) => !prev);
  };

  const onComplete = () => {
    setPlaying(false);
    sound.current.play();
    SetHours(0);
    setMinute(0);
    setSecond(0);
  };

  const renderTime = (remainingTime) => {
    if (remainingTime < 0) {
      return <div className="timer">Time Over!!</div>;
    }

    let minute = Math.floor(remainingTime / 60);
    let secondLeft = remainingTime % 60;
    let hoursLeft = Math.floor(minute / 60);
    let minutesLeft = minute % 60;

    if (secondLeft < 10) {
      secondLeft = `0${secondLeft}`;
    }

    if (minutesLeft < 10) {
      minutesLeft = `0${minutesLeft}`;
    }

    if (hoursLeft < 10) {
      hoursLeft = `0${hoursLeft}`;
    }

    return `${hoursLeft}:${minutesLeft}:${secondLeft}`;
  };

  return (
    <>
      <div className="countdown-container">
        <CountdownCircleTimer
          size={140}
          strokeWidth={5}
          trailColor="##191e39"
          isPlaying={playing}
          duration={second + hours * 3600 + minute * 60}
          colors={["#ff6a6a"]}
          colorsTime={[10]}
          onComplete={onComplete}
        >
          {({ remainingTime }) => (
            <div className="timer">{renderTime(remainingTime)}</div>
          )}
        </CountdownCircleTimer>
      </div>
      <div className="time-setter">
        <div className="time-countdown">
          <div className="hours">
            <span>Hours</span>
            <img onClick={increaseHour} src={increase} alt="increase" />
            {hours < 10 ? <h3>{`0${hours}`}</h3> : <h3>{hours}</h3>}
            <img onClick={decreaseHour} src={decrease} alt="decrease" />
          </div>
          <span className="pointer">:</span>
          <div className="minutes">
            <span>Minutes</span>
            <img onClick={increaseMinute} src={increase} alt="increase" />
            {minute < 10 ? <h3> {`0${minute}`} </h3> : <h3>{minute}</h3>}
            <img onClick={decreaseMinute} src={decrease} alt="decrease" />
          </div>
          <span className="pointer">:</span>
          <div className="seconds">
            <span>Seconds</span>
            <img onClick={increaseSecond} src={increase} alt="increase" />
            {second < 10 ? <h3>{`0${second}`}</h3> : <h3> {second}</h3>}
            <img onClick={decreaseSecond} src={decrease} alt="decrease" />
          </div>
        </div>
        {playing ? (
          <button onClick={handlePauseStart}>Pause</button>
        ) : (
          <button onClick={handlePauseStart}>Start</button>
        )}
        <audio ref={sound} src={tone} />
      </div>
    </>
  );
}

export default Timer;
