import PDFMerger from "pdf-merger-js/browser";
import React, { useEffect, useState } from "react";

// files: Array of PDF File or Blob objects
const Merger = ({ files }) => {
  const [mergedPdfUrl, setMergedPdfUrl] = useState();

  useEffect(() => {
    const render = async () => {
      const merger = new PDFMerger();
      // let p = Promise.resolve();
      for (let i = 0; i < files.length; i++) {
        let pgsPrint = [];
        files[i].pdfPages.forEach((p, _) => {
          if (p.pgneeded) pgsPrint.push(p.pg);
        });
        await merger.add(files[i].pdfFile, pgsPrint);
      }
      // await merger.add(files[0].pdfFile, [1, 2]);
      // await merger.add(files[1].pdfFile, [1]);
      // await merger.add(files[0].pdfFile, [3]);
      // await Promise.all(
      //   files.map(async (file) => {
      //     let pgsPrint = [];
      //     file.pdfPages.map((p, ind) => {
      //       if (p.pgneeded) pgsPrint.push(p.pg);
      //     });
      //     await merger.add(file.pdfFile, pgsPrint);
      //   })
      // );
      // console.log(p);
      // return;
      // );

      const mergedPdf = await merger.saveAsBlob();
      const url = URL.createObjectURL(mergedPdf);

      return setMergedPdfUrl(url);
    };

    render().catch((err) => {
      throw err;
    });
  }, [files, setMergedPdfUrl]);

  return (
    <iframe
      height={1000}
      src={`${mergedPdfUrl}`}
      title="pdf-viewer"
      width="100%s"
    ></iframe>
  );
};

export default Merger;
