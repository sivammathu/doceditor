import React, { useState, useRef } from "react";
import axios from "axios";
import "./ImageCompress.css";

const ImageCompress = () => {
  const [fileName, setFileName] = useState(
    "Choose images to upload (PNG, JPG)"
  );
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
      resData = await axios.post("http://localhost:5000/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {
      console.log(err);
    }
    console.log(resData);
  };
  return (
    <div className="container">
      <div className="imgcom_title">Image Compressor</div>
      <form className="imgcom_frm" encType="multipart/form-data">
        <div className="fileuploadgrp">
          <label
            htmlFor="image_uploads"
            onClick={(e) => chooseFile(e)}
            className="lblFileUplod"
          >
            {fileName}
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
          <button className="btnUpload_dup" onClick={(e) => chooseFile(e)}>
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
