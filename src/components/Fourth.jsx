import React from "react";
import Head from "./Head";
import Image4 from "../assets/img/f1.webp";
import Image2 from "../assets/img/f2.webp";
import Image3 from "../assets/img/f3.webp";
import { Fade } from "react-awesome-reveal";

const Fourth = () => {
  return (
    <div className="foth_cov">
      <Head topic={"Unlimited Scalability in Life & Business"} />
      <div className="fo_md py-5">
        <div className="col-md-11 mx-auto">
          <div className="row m-0">
            <div className="col-md-6">
              <div className="my-auto">
                <div className="text-center w-75 mx-auto">
                  <h2 className="fo_t">
                    Reap the benefits of earning digitally. Register to learn
                    more today!
                  </h2>
                  <div className="fo_btn mt-lg-5 pt-3 mt-3">
                    <button>Click Here To Register</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img_grid ms-lg-5">
                <div>
                  <Fade direction="up" duration={2000}>
                    <div className="img_f ">
                      <span className="badge img_ft">More Travel</span>
                      <img src={Image4} className="img-fluid" alt="" />
                     
                    </div>
                  </Fade>
                  <Fade direction="right" duration={2000}>
                    <div className="img_f img_ff">
                      <img src={Image2} className="img-fluid" alt="" />
                      <span className="badge img_ft">More Time</span>
                    </div>
                  </Fade>
                  <Fade direction="left" duration={2000}>
                    <div className="img_f img_fff">
                      <img src={Image3} className="img-fluid" alt="" />
                      <span className="badge img_ft">More Freedom</span>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
