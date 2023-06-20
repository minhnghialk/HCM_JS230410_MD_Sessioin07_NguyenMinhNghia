import React from "react";
import "./Banner.scss";
import Card from "react-bootstrap/Card";

export default function Banner() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="image-container">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="/images/banner_1.jpg" />
              <Card.Title>WOMEN'S</Card.Title>
            </Card>
          </div>
        </div>
        <div className="col-md-4">
          <div className="image-container">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="/images/banner_2.jpg" />
              <Card.Title>ACCESSORIES'S</Card.Title>
            </Card>
          </div>
        </div>
        <div className="col-md-4">
          <div className="image-container">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="/images/banner_3.jpg" />
              <Card.Title>MEN'S</Card.Title>
            </Card>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <Card.Body
            style={{
              width: "350px",
              height: "80px",
              backgroundColor: "#f2f2f2",
              marginTop: "50px",
              marginLeft: "20px",
              marginBottom: "50px",
            }}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-truck"
                viewBox="0 0 16 16"
                style={{ color: "red", marginTop: "10px", marginLeft: "10px" }}
              >
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </span>
            <span style={{ marginLeft: "50px" }}>FREE SHIPPING</span>
            <p style={{ marginLeft: "90px" }}>
              Suffered Alteration in Some Form
            </p>
          </Card.Body>
        </div>

        <div className="col-md-3">
          <Card.Body
            style={{
              width: "350px",
              height: "80px",
              backgroundColor: "#f2f2f2",
              marginTop: "50px",
              marginLeft: "20px",
              marginBottom: "50px",
            }}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-cash-coin"
                viewBox="0 0 16 16"
                style={{ color: "red", marginTop: "10px", marginLeft: "10px" }}
              >
                <path
                  fill-rule="evenodd"
                  d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
                />
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
              </svg>
            </span>
            <span style={{ marginLeft: "50px" }}>CASH ON DELIVERY</span>
            <p style={{ marginLeft: "90px" }}>The Internet Tend To Repeat</p>
          </Card.Body>
        </div>

        <div className="col-md-3">
          <Card.Body
            style={{
              width: "350px",
              height: "80px",
              backgroundColor: "#f2f2f2",
              marginTop: "50px",
              marginLeft: "20px",
              marginBottom: "50px",
            }}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-arrow-counterclockwise"
                viewBox="0 0 16 16"
                style={{ color: "red", marginTop: "10px", marginLeft: "10px" }}
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
              </svg>
            </span>
            <span style={{ marginLeft: "50px" }}>45 DAYS RETURN</span>
            <p style={{ marginLeft: "90px" }}>Making it Look Like Readable</p>
          </Card.Body>
        </div>

        <div className="col-md-3">
          <Card.Body
            style={{
              width: "350px",
              height: "80px",
              backgroundColor: "#f2f2f2",
              marginTop: "50px",
              marginLeft: "20px",
              marginBottom: "50px",
            }}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-clock"
                viewBox="0 0 16 16"
                style={{ color: "red", marginTop: "10px", marginLeft: "10px" }}
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
              </svg>
            </span>
            <span style={{ marginLeft: "50px" }}>OPENING ALL WEEK</span>
            <p style={{ marginLeft: "90px" }}>08 A.M - 09 P.M</p>
          </Card.Body>
        </div>
      </div>
    </div>
  );
}
