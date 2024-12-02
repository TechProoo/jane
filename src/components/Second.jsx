import React from "react";
import Person from "../assets/img/person.avif";
import Jane from "../assets/img/Jane_Davis.webp";
import { Fade } from "react-awesome-reveal";

const Second = () => {
  return (
    <div className="abt_cov">
      <div className="row m-0">
        <div className="col-md-6">
          <div className="txt_sd text-center py-3">
            <h3>About Your Mentor</h3>
            <Fade cascade direction="left">
              <p>
                Hi! I’m Jane Davis, a cybersecurity analyst. When I’m not diving
                into the latest security trends, you can find me lost in a good
                book, researching new topics, or enjoying a game of soccer. I’m
                also a huge fan of Kdrama.
              </p>
              <p>
                I joined the digital business world to become my own boss
                because I wanted the freedom and flexibility to shape my career
                on my own terms. The traditional work environment didn’t align
                with my vision of success, and I craved the opportunity to
                create something meaningful. By starting my own online venture,
                I can leverage my skills and passion while pursuing my interests
                in the digital space and beyond. This journey empowers me to
                take control of my professional path, explore new possibilities,
                and make a positive impact on people while living the life of my
                dreams.
              </p>
            </Fade>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <div className="se_bgg">
            <div className="se_img ">
              <img src={Jane} className="img-fluid" alt="" />
            </div>
            <h1 className="mt-2">Jane Franchise</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
