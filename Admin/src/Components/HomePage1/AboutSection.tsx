import React from "react";
import { Link } from "react-router-dom";
import businessman from "../../assets/businessmen-thumbs-up-looking-camera.jpg"
import businessman2 from "../../assets/portrait-business-person-work.jpg"
import gradient from "../../assets/v960-ning-31.jpg"

const AboutSection: React.FC = () => {
  return (
    <div className="about1-section-area sp6" id="about"   style={{ backgroundImage: `url(${gradient})`,  }}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="about-images" >
              
              <figure
              style={{height:"100%"}}
              
                className="image-anime"
                data-aos="fade-zoom-in"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <img
                  src={businessman}
                  alt="About"
                  style={{borderRadius: "300px 300px 300px 300px", width:"550px"}}
                  
                />
               
                
              </figure>
              {/* <img
                src="/assets/img/elements/star1.png"
                alt="Star"
                className="star1 keyframe5"
              />
               */}
              
              
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-content-area heading2">
              <div className="arrow-circle">
                {/* <Link to="/about">
                  <img
                    src="/assets/img/elements/elements4.png"
                    alt="Element"
                    className="elements4 keyframe5"
                  />
                  <img
                    src="/assets/img/icons/arrow.svg"
                    alt="Arrow"
                    className="arrow"
                  />
                </Link> */}
              </div>
              <h2 className="text-anime-style-3" style={{fontSize:"40px", marginLeft:"25px" }}>
              Fostering connections between <br/> co-founders and investors 
              </h2>
              <p data-aos="fade-left" data-aos-duration="1000" style={{fontSize: "20px"}}>
              Building meaningful connections between co-founders and investors to drive collaboration and growth
              </p>
              <div
                className="btn-area"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                {/* <Link to="/about" className="header-btn1">
                  Learn More
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-auhtor-images">
              {/* <img
                src="/assets/img/elements/elements5.png"
                alt="Element"
                className="elements5 keyframe5"
              /> */}
              <figure
                className="image-anime"
                data-aos="fade-zoom-in"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <img
                style={{borderRadius: "200px 200px 200px 200px"}}
                  src={businessman2}
                  alt="About Author"
                />
                
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
