import React from "react";
import "./Carousel.scss";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

export default function Carousel1() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/slider_1.jpg"
            alt="First slide"
          />
          <div
            style={{
              position: "absolute",
              width: "500px",
              height: "0px",
            }}
          >
            <Carousel.Caption>
              <p style={{ color: "#000033" }}>
                SPRING / SUMMER COLLECTION 2017
              </p>
              <p style={{ color: "#000033", fontSize: "40px" }}>
                Get up to 30% Off New Arrivals
              </p>
              <Button variant="danger">SHOP NOW</Button>{" "}
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/slider_2.jpg"
            alt="First slide"
          />
          <div
            style={{
              position: "absolute",
              width: "500px",
              height: "0px",
            }}
          >
            <Carousel.Caption>
              <p style={{ color: "#000033" }}>
                SPRING / SUMMER COLLECTION 2017
              </p>
              <p style={{ color: "#000033", fontSize: "40px" }}>
                Get up to 30% Off New Arrivals
              </p>
              <Button variant="danger">SHOP NOW</Button>{" "}
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/slider_3.jpg"
            alt="First slide"
          />
          <div
            style={{
              position: "absolute",
              width: "500px",
              height: "0px",
            }}
          >
            <Carousel.Caption>
              <p style={{ color: "#000033" }}>
                SPRING / SUMMER COLLECTION 2017
              </p>
              <p style={{ color: "#000033", fontSize: "40px" }}>
                Get up to 30% Off New Arrivals
              </p>
              <Button variant="danger">SHOP NOW</Button>{" "}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
