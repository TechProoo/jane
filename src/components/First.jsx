import React from "react";
import Image from "../assets/img/May_Lander_1.crop_624x1215_0,0.preview.webp";
import Image2 from "../assets/img/May_Lander.crop_888x1215_0,0.preview.webp";
import { Fade } from "react-awesome-reveal";
const First = () => {
  // ScrollReveal({
  //   duration: 2400,
  //   distance: "60px",
  // }).reveal(".img_1", { origin: "top", delay: 200 });

  // ScrollReveal({
  //   duration: 2500,
  //   distance: "60px",
  // }).reveal(".img_2", { origin: "bottom", delay: 200 });

  // ScrollReveal({
  //   duration: 2400,
  //   distance: "80px",
  // }).reveal("h1", { origin: "top", delay: 200 });

  // ScrollReveal({
  //   duration: 2500,
  //   distance: "60px",
  // }).reveal("button", { origin: "right", delay: 300 });

  return (
    <div className="fst">
      <div className="row p-0 m-0">
        <div className="col-md-6 ">
          <div className="p-5 ms-2 fst_1">
            <div className="d-flex">
              <div className="img_cov">
                <Fade>
                  <img src={Image2} className="img-fluid img_2" alt="" />
                </Fade>
              </div>
              <div className="img_cov_2">
                <Fade direction="up" duration={2000}>
                  <img src={Image} className="img-fluid img_1" alt="" />
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="fs_hd text-center p-lg-4">
            <Fade duration={2000} direction="down">
              <h1>Unlock Your Digital Earning Potential</h1>
            </Fade>
            <Fade>
              <p className="pt-5">
                Transform Your Digital Presence into a Revenue Stream
              </p>
            </Fade>
          </div>
          <div className="fs_form d-flex justify-content-center ">
            <form
              action=""
              className="py-3 pt-4 d-flex justify-content-center text-center align-items-center gap-3 flex-column"
            >
              <div>
                <input type="text" className="fs_i" placeholder="Your Name" />
              </div>
              <div>
                <input type="mail" className="fs_i" placeholder="Your Email" />
              </div>
              <div className="btn_cov">
                <Fade duration={2000} direction="up" delay={1000}>
                  <button>Click Here To Register</button>
                </Fade>
              </div>
              <div className="">
                <input type="checkbox" className="in_ch" />
                <b className="sm text-white text-start ps-2">
                  I consent to having information about business programs
                  emailed to me.
                </b>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
