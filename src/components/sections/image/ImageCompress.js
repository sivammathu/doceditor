import React, { useState, useRef } from "react";
import "./ImageCompress.css";
import imageCompression from 'browser-image-compression';

const ImageCompress = () => {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState(false)
  const [file, setFile] = useState(null);
  const refFileUpload = useRef(null);
  const chooseFile = (e) => {
    e.preventDefault();
    refFileUpload.current.click();
  };
  const fileHandler = (e) => {
    setError(false)
    if (e.target.files.length > 1) {
      console.log(e.target.files[0].name);
      setFileName(e.target.files[0].name);
      setFile(e.target.files[0]);
    }else{
      setError(true)
    }
  };
  const compressHandlr = async (e) => {
    e.preventDefault();    
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(file, options);
      console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
  
      console.log(compressedFile); // write your own logic

      const blob = new Blob([compressedFile], { type: "image/png" });
      const link = document.createElement("a");
      const url = window.URL.createObjectURL(blob);
      link.href = url;
      console.log(url);
      link.setAttribute("download", compressedFile.name);
      link.click();
    } catch (error) {
      console.log(error);
      setError(true)
    }
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
        {error && <p className="errorP"><span>Unable to process!! Try again!!</span></p> }
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
