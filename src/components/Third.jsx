import React from "react";
import Card from "./Card";
import Head from "./Head";

const Third = () => {
  return (
    <div>
      <Head topic={"Why Are People Joining Us Online?"} />
      <div className="pt-3 cd_sec mx-auto">
        <div className="row m-0 g-5">
          <div className="col-md-4 ">
            <Card
              head={"Training"}
              body={
                "We provide video-based training that is continuously monitored and updated at no extra cost to our business owners."
              }
            />
          </div>
          <div className="col-md-4">
            <Card
              head={"Mentorship"}
              body={
                "Many of our business owners act as mentors and/or coaches, offering guidance and advice to those who are newer to the digital business world."
              }
            />
          </div>
          <div className="col-md-4">
            <Card
              head={"Automation"}
              body={
                "Our automated systems allow you to run your business 24/7 while maintaining the balance you need to continue living your life."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
