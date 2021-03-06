import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="container my-5">
      <div className="row row-cols-lg-3 row-cols-md-2 g-4">
        <div className="col-md flex-fill align-items-stretch">
          <div className="card h-100">
            <div
              className="card-title text-center bg-info text-light p-2"
              style={{ fontSize: "1.2rem" }}
            >
              PDF Add Remove Pages
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
              <p>
                Add or remove pdf pages in any order, manipulate pages from
                multiple pdf files, print or save pdf file. All these
                functionlities without uploading files to any server. Once this
                page is loaded you can even disconnect internet connection and
                perform all these operations!!
              </p>
              <Link className="btn btn-outline-primary" to="/pdfmerger">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md flex-fill align-items-stretch">
          <div className="card h-100" style={{ minHeight: "200px" }}>
            <div
              className="card-title text-center bg-info text-light p-2"
              style={{ fontSize: "1.2rem" }}
            >
              PDF Compressor
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
              <p>
                Reduce PDF file size into minimum at your specified file size,
                your data will not be stored anywhere and all compressed files
                will be cleared from server once it is downloaded.
              </p>
              <Link className="btn btn-outline-primary" to="/pdfmerger">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md flex-fill align-items-stretch">
          <div className="card h-100">
            <div
              className="card-title text-center bg-primary text-light p-2"
              style={{ fontSize: "1.2rem" }}
            >
              Image Compressor
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
              <p>
                Reduce your image file size to minimum without much impact in
                quality of the image. No files will be saved in server, all will
                be erased as soon as it is downloaded from application.
              </p>
              <Link className="btn btn-outline-primary" to="/imagecompressor">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
