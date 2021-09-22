import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import { Page as RendPage, Text } from '@react-pdf/renderer';
import { FaRegWindowClose } from "react-icons/fa";
import { BsPlusSquareFill } from "react-icons/bs";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfContent = (props) => {
  let pdfWidth = 700;
  let pdfHeight = 102;
  let wndWidth = window.innerWidth;
  if (wndWidth >= 760 && wndWidth <= 993) {
    pdfWidth = 500;
    pdfHeight = 82;
  } else if (wndWidth < 760 && wndWidth >= 400) {
    pdfWidth = 300;
    pdfHeight = 82;
  } else if (wndWidth < 400) {
    pdfWidth = 250;
    pdfHeight = 82;
  }
  return (
    <Document
      file={props.pdfFile}
      onLoadSuccess={props.onDocumentLoadSuccess}
      onLoadError={console.error}
      id="documentPDF"
    >
      {props.pdfPages &&
        props.pdfPages.map((p, index) => {
          if (p.pgneeded) {
            return (
              <React.Fragment key={props.fileIndex + index}>
                <div className="btnGroup">
                  <span
                    className="closePDF"
                    onClick={() => props.removePDF(p.pg, props.fileIndex)}
                  >
                    <FaRegWindowClose className="closeBtnPages" />
                  </span>
                  <span
                    className="openPDF"
                    onClick={() =>
                      props.accessFileIP(
                        "f" + props.fileIndex + "p" + (Number(index) + 1)
                      )
                    }
                  >
                    <BsPlusSquareFill className="addBtnPages" />
                  </span>
                </div>
                <Page
                  className="w-50 footerCls"
                  break
                  pageNumber={p.pg}
                  width={pdfWidth}
                  height={pdfHeight}
                  id={"pagePDF" + p.pg}
                ></Page>
              </React.Fragment>
            );
          }
          return <></>;
        })}
    </Document>
  );
};

export default PdfContent;
