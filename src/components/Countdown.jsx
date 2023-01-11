// Imports
import { useEffect, useState } from "react";

// Countdown component
export default function Countdown() {
  // The current time useState
  const [currentTime, setCurrentTime] = useState(new Date());

  // Current year
  const year = currentTime.getFullYear();

  // This years christmas time
  const christmasTime = new Date(`${year}, 12, 23, 23:59:59`);

  // Function to get the time left until christmas
  function getTime(type) {
    // Seconds left
    const seconds = christmasTime.getSeconds() - currentTime.getSeconds();
    // Hours left
    const hours = christmasTime.getHours() - currentTime.getHours();
    // Days left
    const days = Math.floor((christmasTime - currentTime) / 86400000);

    // returns different values depending on the value in the
    // type parameter that was called
    if (type === "seconds") return seconds;
    if (type === "hours") return hours;
    if (type === "days" && days >= 0) return days;
    if (type === "days" && days < 0) return 365 + days;
  }

  // TimeLeft contains an object with the current time left until christmas
  const [timeLeft, setTimeLeft] = useState({
    seconds: getTime("seconds"),
    hours: getTime("hours"),
    days: getTime("days"),
  });

  // Updates timeLeft useState every second with updated time left until christmas
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

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  });

  return (
    // Countdown container
    <div className="countdown">
      {/* Title */}
      <h1 className="countdown__title">JULE NEDTELLING</h1>
      {/* Time left container */}
      <table className="countdown__timeLeft">
        {/* Time title */}
        <thead>
          <tr className="countdown__timeLeft__titles">
            <th className="countdown__timeLeft__titles__title">Dager</th>
            <th className="countdown__timeLeft__titles__title">Timer</th>
            <th className="countdown__timeLeft__titles__title">Sekunder</th>
          </tr>
        </thead>

        {/* Time amount */}
        <tbody>
          <tr className="countdown__timeLeft__details">
            <td className="countdown__timeLeft__details__detail">{timeLeft.days}</td>
            <td className="countdown__timeLeft__details__detail">{timeLeft.hours}</td>
            <td className="countdown__timeLeft__details__detail">{timeLeft.seconds}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/*
<div className="countdown__timeLeft">
<p className="countdown__timeLeft__paragraph">Dager</p>
<p className="countdown__timeLeft__paragraph">{timeLeft.days}</p>

<p className="countdown__timeLeft__paragraph">Timer</p>
<p className="countdown__timeLeft__paragraph">{timeLeft.hours}</p>

<p className="countdown__timeLeft__paragraph">Sekunder</p>
<p className="countdown__timeLeft__paragraph">{timeLeft.seconds}</p>
</div>
*/
