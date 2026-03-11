import { useState, useEffect } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
  timeZone: "Europe/Berlin",
});

export default function StatusCard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   fetch(
  //     `https://api.open-meteo.com/v1/forecast?latitude=53.5507&longitude=9.993&current=temperature_2m,weather_code`,
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.current));
  // }, []);

  return (
    <>
      <div className="status">
        <div className="status-dot">
          <div className="status-dot-active"></div>
        </div>
        <p>currently coding.</p>
      </div>

      <div className="local-weather"></div>
      <div className="local-time">
        <span className="current-time">
          {formatter.format(currentTime)} HAM{" "}
        </span>
      </div>
    </>
  );
}

// meteo weather codes

// clear sky
// partly cloudy
// cloudy
// dust
// fog
// drizzle
// rain
// snow
// showers
// thunderstorm
// sleet
// freezing rain
// hail
//  extreme
