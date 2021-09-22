import React, { useState, useRef } from "react";
import axios from "axios";
import "./ImageCompress.css";

const ImageCompress = () => {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const refFileUpload = useRef(null);
  const chooseFile = (e) => {
    e.preventDefault();
    refFileUpload.current.click();
  };
  const fileHandler = (e) => {
    if (e.target.files) {
      console.log(e.target.files[0].name);
      setFileName(e.target.files[0].name);
      setFile(e.target.files[0]);
    }
  };
  const compressHandlr = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    let resData;
    try {
      resData = await axios
        .post("http://localhost:5000/uploads", formData, {
          responseType: "blob",
          headers: {
            "Content-Type": "multipart/form-data",
            "Response-Type": "blob",
          },
        })
        .then((res) => {
          console.log(res);
          const type = res.headers["content-type"];
          const blob = new Blob([res.data], { type: "image/png" });
          const link = document.createElement("a");
          const url = window.URL.createObjectURL(blob);
          link.href = url;
          console.log(url);
          link.setAttribute("download", "merged1");
          link.click();
        });
    } catch (err) {
      console.log(err);
    }
    console.log(resData);
  };

  return (
    <div className="container">
      <form className="imgcom_frm mt-5 pt-5" encType="multipart/form-data">
        <div className="fileuploadgrp">
          <label
            htmlFor="image_uploads"
            onClick={(e) => chooseFile(e)}
            className="lblFileUplod"
            style={{ flexGrow: 2 }}
          >
            {fileName === "" ? (
              <span className="d-none d-md-inline">
                "Choose images to upload (PNG, JPG)"
              </span>
            ) : (
              fileName
            )}
          </label>
          <input
            type="file"
            id="image_uploads"
            name="image_uploads"
            className="imgcom_ip_upload"
            ref={refFileUpload}
            accept=".jpg, .jpeg, .png"
            onChange={(e) => fileHandler(e)}
          />
          <button
            className="btn btn-primary btn-lg"
            onClick={(e) => chooseFile(e)}
            style={{ flexGrow: 1 }}
          >
            Browse
          </button>
        </div>
        <div className="btnCompressGrp">
          <button className="btnCompress" onClick={(e) => compressHandlr(e)}>
            Compress
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageCompress;
