import React, { useState, useEffect } from "react";
import "./DealOfWeek.scss";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function DealOfWeek() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();

      const countdownDate = new Date("2023-06-30T00:00:00Z").getTime();

      const timeRemaining = countdownDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#f2f2f2",
      }}
    >
      <Image src="/images/deal_ofthe_week.png" fluid />;
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "0",
          paddingRight: "50px",
        }}
      >
        <h1>Deal Of The Week</h1>
        <hr
          style={{
            color: "red",
            height: "100px",
            width: "60px",
            marginLeft: "100px",
            borderWidth: "5px",
          }}
        ></hr>

        <div className="row" style={{ marginRight: "100px" }}>
          <div
            className="col-md-3"
            style={{
              width: "100px",
              heigt: "100px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              color: "red",
              paddingTop: "10px",
              textAlign: "center",
              marginRight: "20px",
            }}
          >
            <p style={{ fontSize: "30px" }}>{days}</p>
            <p style={{ color: "black" }}>Days</p>
          </div>

          <div
            className="col-md-3"
            style={{
              width: "100px",
              heigt: "100px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              color: "red",
              paddingTop: "10px",
              textAlign: "center",
              marginRight: "20px",
            }}
          >
            <p style={{ fontSize: "30px" }}>{hours}</p>
            <p style={{ color: "black" }}>Hours</p>
          </div>

          <div
            className="col-md-3"
            style={{
              width: "100px",
              heigt: "100px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              color: "red",
              paddingTop: "10px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "30px" }}>{minutes}</p>
            <p style={{ color: "black" }}>Mins</p>
          </div>

          <div
            className="col-md-3"
            style={{
              width: "100px",
              heigt: "100px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              color: "red",
              paddingTop: "10px",
              textAlign: "center",
              marginLeft: "20px",
            }}
          >
            <p style={{ fontSize: "30px" }}>{seconds}</p>
            <p style={{ color: "black" }}>Sec</p>
          </div>
        </div>
        <br></br>
        <Button
          variant="dark"
          style={{ marginLeft: "150px", marginTop: "50px" }}
        >
          SHOP NOW
        </Button>
      </div>
    </div>
  );
}
