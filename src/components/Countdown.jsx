import { useEffect, useState } from "react";

export default function Countdown() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const year = currentTime.getFullYear();

  const endOfYearTime = new Date(`${year}, 12, 23, 23:59:59`);

  function getTime(type) {
    const seconds = endOfYearTime.getSeconds() - currentTime.getSeconds();
    const hours = endOfYearTime.getHours() - currentTime.getHours();
    const days = Math.floor((endOfYearTime - currentTime) / 86400000);

    if (type === "seconds") return seconds;
    if (type === "hours") return hours;
    if (type === "days" && days >= 0) return days;
    if (type === "days" && days < 0) return 365 + days;
  }

  const [timeLeft, setTimeLeft] = useState({
    seconds: getTime("seconds"),
    hours: getTime("hours"),
    days: getTime("days"),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setTimeLeft((prevTime) => {
        return {
          seconds: getTime("seconds"),
          hours: getTime("hours"),
          days: getTime("days"),
        };
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="countdown">
      <h1 className="countdown__title">JULE NEDTELLING</h1>
      <div className="countdown__timeLeft">
        <p className="countdown__timeLeft__paragraph">Dager</p>
        <p className="countdown__timeLeft__paragraph">{timeLeft.days}</p>
        <p className="countdown__timeLeft__paragraph">Timer</p>
        <p className="countdown__timeLeft__paragraph">{timeLeft.hours}</p>
        <p className="countdown__timeLeft__paragraph">Sekunder</p>
        <p className="countdown__timeLeft__paragraph">{timeLeft.seconds}</p>
      </div>
    </div>
  );
}
