// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import html_to_pdf from 'html-pdf-node'
import puppeteer from 'puppeteer';

const saveAsPdf = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: 'networkidle0'
  });

  const result = await page.pdf({
    format: 'a4',
  });
  await browser.close();

  return result;
};


let options = { format: "A4" };
let file = {
  // content: `<html><body><pre style='font-size: 1.2rem'>${req.body.text}</pre></body></html>`,
  content: `<html><body><pre style='font-size: 1.2rem'>
  <p>
  Hello World</p></pre></body></html>`,
};

export default async function handler(req, res) {

  res.setHeader(
    'Content-Disposition',
    `attachment; filename="file.pdf"`
  );
  res.setHeader('Content-Type', 'application/pdf');

  const pdf = await saveAsPdf("http://localhost:3000/resume");

  return res.send(pdf);

  // html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
  //   // console.log("PDF Buffer:-", pdfBuffer);
  //   const pdfName = "./resume-" + Date.now() + ".pdf";

  //   fs.writeFile(pdfName, pdfBuffer, function (writeError) {
  //     if (writeError) {
  //       console.log("writeError ", writeError)
  //       return res
  //         .status(500)
  //         .json({ message: "Unable to write file. Try again." });
  //     }

  //     fs.readFile(pdfName, function (readError, readData) {
  //       if (!readError && readData) {
  //         // console.log({ readData });
  //         res.setHeader("Content-Type", "application/pdf");
  //         res.setHeader("Content-Disposition", "attachment");
  //         res.send(readData);
  //         return;
  //       }

  //       console.log(readError)

  //       return res
  //         .status(500)
  //         .json({ message: "Unable to write file. Try again." });
  //     });
  //   });

  // })
}