import React from "react";
import PDF from "../../../images/pdf.png";
import "./Content.css";

const Content = () => {
  return (
    <div className="container mt-5 content_hm">
      <div className="d-md-flex">
        <div className="content_lft_hm pt-lg-5">
          <h1 className="content_tlt_hm">Lets change doc easy!!</h1>
          <h3 className="content_subtlt_hm">
            All tools here make your life easy and privacy will be protected all
            times.
          </h3>
          <a href="#" className="btn btn-primary input-block-level mt-5 px-5">
            Explore All Tools
          </a>
        </div>
        <div className="">
          <img src={PDF} alt="" className="imgPDF" />
        </div>
      </div>
    </div>
  );
};

export default Content;
