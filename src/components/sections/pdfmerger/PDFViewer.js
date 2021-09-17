import React, { useState, useRef } from "react";
import PdfContent from "./PDFContent";
import "./pdfViewer.css";
import Merger from "./PDFMerger";

const Pdfviewer = () => {
  const [pdfFiles, setpdfFiles] = useState([]);
  const [pdfPrint, setpdfPrint] = useState(false);
  const ipElement = useRef(null);
  const printableEle = useRef(null);

  const handlePDFInput = (e) => {
    const ipFile = e.target.files[0];
    if (ipFile) {
      setpdfFiles([...pdfFiles, { pdfFile: ipFile, pdfPagesLoaded: false }]);
    }
  };

  const onDocumentLoadSuccess = (p, pdfindex) => {
    let currPDF = { ...pdfFiles[pdfindex] };
    if (!currPDF.pdfPagesLoaded) {
      const numPages = p.numPages;
      const pgDetails = [];
      for (let index = 1; index <= numPages; index++) {
        pgDetails.push({ pg: index, pgneeded: true });
      }
      currPDF = { ...currPDF, pdfPagesLoaded: true, pdfPages: pgDetails };
      const currFilePostn = ipElement.current.name;
      if (currFilePostn === "") {
        let tempFiles = [...pdfFiles];
        tempFiles[pdfindex] = currPDF;
        setpdfFiles(tempFiles);
      } else {
        let filePostn = Number(String(currFilePostn.split("p")[0]).slice(1));
        let pagePostn = Number(currFilePostn.split("p")[1]) - 1;
        let leftPage = [];
        if (filePostn !== 0) {
          leftPage = pdfFiles.slice(0, filePostn);
        }
        let leftOneMost = null;
        console.log(pdfFiles);
        if (pagePostn !== 0) {
          leftOneMost = { ...pdfFiles[filePostn] };
          let leftOneMostPages = leftOneMost.pdfPages.slice(0, pagePostn);
          leftOneMost.pdfPages = leftOneMostPages;
          leftPage.push(leftOneMost);
        }
        leftPage.push(currPDF);
        let rightOneMost = { ...pdfFiles[filePostn] };
        let rightOneMostPages = rightOneMost.pdfPages.slice(pagePostn);
        rightOneMost.pdfPages = rightOneMostPages;
        let rightPage = [rightOneMost];
        let rightTempPage = pdfFiles.filter(
          (i, index) => index !== pdfindex && index > filePostn
        );
        rightPage.push(...rightTempPage);
        leftPage.push(...rightPage);
        console.log(leftPage);
        setpdfFiles(leftPage);
      }
    }
  };

  const removePDF = (i, pdfindex) => {
    let currPDF = { ...pdfFiles[pdfindex] };
    console.log(currPDF, i);
    if (currPDF) {
      let newIndx = currPDF.pdfPages.findIndex((p) => p.pg === i);
      currPDF.pdfPages[newIndx].pgneeded = false;
      let tempPdfFiles = [...pdfFiles];
      tempPdfFiles[pdfindex] = currPDF;
      setpdfFiles(tempPdfFiles);
    }
  };

  const accessFileIP = (filePostn) => {
    console.log(filePostn);
    ipElement.current.name = filePostn;
    ipElement.current.click();
  };

  const printDiv = async (divName) => {
    console.log(pdfFiles);
    setpdfPrint(true);
  };

  return (
    <div className="container pdfViewer">
      {!pdfPrint && (
        <div className="inputDiv">
          <div className="pdfTitle">PDF Add/Remove Pages</div>
          <div className="pdfInputFlds">
            <span>Choose PDF files</span>
            <input
              type="file"
              id="pdfinput"
              name=""
              onChange={(e) => handlePDFInput(e)}
            />
            <input
              type="file"
              id="pdfinputHdn"
              name=""
              className="pdfinputHdn"
              onChange={(e) => handlePDFInput(e)}
              ref={ipElement}
            />
          </div>
        </div>
      )}
      {!pdfPrint && (
        <div className="pdfDiv">
          <div className="pdfTitleOP">PDF Display Pages</div>
          <div className="pdfContents" id="pdfContents" ref={printableEle}>
            {/* <Document> */}
            {pdfFiles.length === 0 && (
              <p className="infoPDF">No files selected</p>
            )}
            {!pdfPrint && pdfFiles.length !== 0 ? (
              <div className="printPdfDiv">
                <button className="pdfPrint" onClick={printDiv}>
                  Download PDF
                </button>
              </div>
            ) : null}
            {pdfFiles &&
              pdfFiles.map((pFileObj, pdfIndex) => {
                return (
                  <PdfContent
                    onDocumentLoadSuccess={(e) =>
                      onDocumentLoadSuccess(e, pdfIndex)
                    }
                    pdfFile={pFileObj.pdfFile}
                    pdfPages={pFileObj.pdfPages}
                    key={"f" + pdfIndex}
                    fileIndex={pdfIndex}
                    removePDF={removePDF}
                    accessFileIP={accessFileIP}
                    pdfPrint={pdfPrint}
                  />
                );
              })}
            {/* </Document> */}
          </div>
        </div>
      )}
      {pdfPrint && <Merger files={pdfFiles} />}
    </div>
  );
};

export default Pdfviewer;
