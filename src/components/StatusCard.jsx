import { useState, useEffect } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "Europe/Berlin",
});

export default function StatusCard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="status-container">
        <div className="status">
          <div className="status-update">
            <div className="status-dot">
              <div className="active-pulse"></div>
            </div>
            <p className="hero-top">Just coding</p>
          </div>
          <span className="current-time">{formatter.format(currentTime)} </span>
          <span className="country-time">HAM, DE · GMT+2</span>
        </div>

        <div className="cta">
          <p className="open-cta">OPEN FOR WORK</p>
        </div>
      </div>
    </>
  );
}
