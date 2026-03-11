import { useEffect } from "react";

export default function StatusCard() {
  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=53.5507&longitude=9.993&current=temperature_2m,weather_code`,
    )
      .then((res) => res.json())
      .then((data) => console.log(data.current));
  }, []);

  return (
    <>
      <div className="status">
        <div className="status-dot"></div>
        <p>currently coding.</p>
      </div>
      <div className="lok-time"></div>
      <div className="lok-weather"></div>
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
