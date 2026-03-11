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
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="status">
        <div className="status-dot">
          <div className="status-dot-active"></div>
        </div>
        <p>currently coding.</p>
      </div>

      <div className="local-time">
        <span className="current-time">
          {formatter.format(currentTime)} HAM{" "}
        </span>
      </div>
    </>
  );
}
