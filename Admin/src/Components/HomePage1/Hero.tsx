import React from "react";
import { Link } from "react-router-dom";
import ladyimage from "../../assets/people-connecting-web-network-diagram-background-b.png"
import gradient from "../../assets/v960-ning-31.jpg"
import { url } from "inspector";

const Hero: React.FC = () => {
  return (
    <div 
      className="hero1-section-area"
      style={{ backgroundImage: `url(${gradient})`,  }}
    >
      {/* <img
        src="/assets/img/elements/elements1.png"
        alt=""
        className="elements1 aniamtion-key-1"
      /> */}
      <div className="container" style={{}}>
        <div className="row align-items-center"style={{marginLeft:"-7%" , }} >
          <div className="col-lg-6">
            <div className="header-main-content heading1" >
              {/* <h5>
                <img src="/assets/img/icons/logo-icons.svg" alt="" />Top #1
                SEO & Marketing Agency
              </h5> */}
              <h1 className="text-anime-style-3" >
              The game-changing community of Founders, Investors, and Acquirers
              </h1>
              <h4 data-aos="fade-left" data-aos-duration="1000">
              Empowering connections between visionary founders, strategic investors, and ambitious acquirers,  <br className="d-lg-block d-none" />
              fostering collaboration, growth, and opportunities across the startup ecosystem.
             </h4>
              <div
                className="btn-area"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                {/* <Link to="/contact" className="header-btn1">
                  Start Ranking Now
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link> */}
                {/* <Link to="/contact" className="header-btn2">
                  Contact Now
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link> */}
              </div>
            </div>
          </div>


          
          <div className="col-lg-6">
            <div className="header-images-area">
              <div className="main-images-area">
                <div className="img1" style={{height: "700px"}}>
                  <img
                    src={ladyimage}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    style={{objectFit: "cover", width:"100%" , height: "100%"}}
                  />
                </div>
                {/* <div className="img2">
                  <img src="/assets/img/bg/header-imgbg.png" alt="" />
                </div> */}
                {/* <div className="icons-area">
                  <img
                    src="/assets/img/icons/sound-icons1.svg"
                    alt=""
                    className="sound-icons1 aniamtion-key-1"
                  />
                  <img
                    src="/assets/img/icons/lite-icons1.svg"
                    alt=""
                    className="lite-icons1 aniamtion-key-1"
                  />
                </div> */}
                {/* <div className="auhtor-icons">
                  <img
                    src="/assets/img/elements/elements2.png"
                    alt=""
                    className="elements2"
                  />
                  <img
                    src="/assets/img/elements/elements3.png"
                    alt=""
                    className="elements3"
                  />
                </div> */}
                {/* <div className="auhtor-images">
                  <img
                    src="/assets/img/all-images/header-author-img1.png"
                    alt=""
                    className="header-author-img1 aniamtion-key-2"
                  />
                  <img
                    src="/assets/img/all-images/header-author-img2.png"
                    alt=""
                    className="header-author-img2 aniamtion-key-2"
                  />
                </div> */}
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Hero;
