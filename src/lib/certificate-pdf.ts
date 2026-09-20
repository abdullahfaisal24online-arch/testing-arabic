import fontkit from '@pdf-lib/fontkit';
import { degrees, PDFDocument, rgb } from 'pdf-lib';

interface CertificateInput {
  participantName: string;
  courseTitle: string;
  issueDate: string;
  signatureBytes: ArrayBuffer | Uint8Array;
  fontRegularBytes: ArrayBuffer | Uint8Array;
  fontBoldBytes: ArrayBuffer | Uint8Array;
}

const navy = rgb(0.035, 0.09, 0.17);
const navySoft = rgb(0.065, 0.14, 0.24);
const cyan = rgb(0.03, 0.62, 0.86);
const orange = rgb(0.97, 0.36, 0.08);
const gold = rgb(0.79, 0.57, 0.2);
const goldLight = rgb(0.94, 0.75, 0.34);
const ink = rgb(0.04, 0.11, 0.23);
const muted = rgb(0.24, 0.32, 0.43);
const ivory = rgb(0.992, 0.985, 0.955);

function centeredX(text: string, size: number, center: number, font: any) {
  return center - font.widthOfTextAtSize(text, size) / 2;
}

function fitSize(text: string, preferred: number, maxWidth: number, font: any, min = 13) {
  let size = preferred;
  while (size > min && font.widthOfTextAtSize(text, size) > maxWidth) size -= 1;
  return size;
}

function drawCornerDecorations(page: any, width: number, height: number) {
  // خطوط عريضة بزوايا حادة تعطي نفس الإطار الهندسي بدون أشكال خارجة عن الصفحة.
  page.drawLine({ start: { x: -15, y: height - 38 }, end: { x: 102, y: height - 38 }, thickness: 42, color: navy });
  page.drawLine({ start: { x: 96, y: height - 38 }, end: { x: 140, y: height + 6 }, thickness: 42, color: navy });
  page.drawLine({ start: { x: -12, y: height - 58 }, end: { x: 112, y: height - 58 }, thickness: 11, color: gold });
  page.drawLine({ start: { x: 107, y: height - 58 }, end: { x: 157, y: height - 8 }, thickness: 11, color: gold });
  page.drawLine({ start: { x: 145, y: height - 18 }, end: { x: 164, y: height + 1 }, thickness: 6, color: cyan });

  page.drawLine({ start: { x: width + 15, y: 38 }, end: { x: width - 102, y: 38 }, thickness: 42, color: navy });
  page.drawLine({ start: { x: width - 96, y: 38 }, end: { x: width - 140, y: -6 }, thickness: 42, color: navy });
  page.drawLine({ start: { x: width + 12, y: 58 }, end: { x: width - 112, y: 58 }, thickness: 11, color: gold });
  page.drawLine({ start: { x: width - 107, y: 58 }, end: { x: width - 157, y: 8 }, thickness: 11, color: gold });
  page.drawLine({ start: { x: width - 145, y: 18 }, end: { x: width - 164, y: -1 }, thickness: 6, color: cyan });
}

function drawAwardSeal(page: any, x: number, y: number) {
  page.drawLine({ start: { x: x - 18, y: y - 23 }, end: { x: x - 25, y: y - 82 }, thickness: 22, color: gold });
  page.drawLine({ start: { x: x + 18, y: y - 23 }, end: { x: x + 25, y: y - 82 }, thickness: 22, color: gold });
  page.drawLine({ start: { x: x - 18, y: y - 23 }, end: { x: x - 25, y: y - 82 }, thickness: 17, color: navy });
  page.drawLine({ start: { x: x + 18, y: y - 23 }, end: { x: x + 25, y: y - 82 }, thickness: 17, color: navy });

  for (let index = 0; index < 24; index += 1) {
    const angle = (Math.PI * 2 * index) / 24;
    page.drawCircle({
      x: x + Math.cos(angle) * 43,
      y: y + Math.sin(angle) * 43,
      size: 8,
      color: goldLight,
    });
  }
  page.drawCircle({ x, y, size: 44, color: goldLight, borderColor: gold, borderWidth: 1.2 });
  page.drawCircle({ x, y, size: 36, color: navy, borderColor: gold, borderWidth: 2 });
  page.drawCircle({ x, y, size: 31, color: navySoft, borderColor: goldLight, borderWidth: 0.8 });

  page.drawSvgPath('M 0 -14 L 3.3 -4.6 L 13.3 -4.3 L 5.2 1.7 L 8.2 11.4 L 0 5.8 L -8.2 11.4 L -5.2 1.7 L -13.3 -4.3 L -3.3 -4.6 Z', {
    x, y, color: goldLight, borderColor: gold, borderWidth: 0.7,
  });

  for (let index = 0; index < 5; index += 1) {
    const leafY = y - 17 + index * 9;
    page.drawEllipse({
      x: x - 22 + index * 1.7,
      y: leafY,
      xScale: 2,
      yScale: 4.5,
      rotate: degrees(-34 + index * 8),
      color: goldLight,
    });
    page.drawEllipse({
      x: x + 22 - index * 1.7,
      y: leafY,
      xScale: 2,
      yScale: 4.5,
      rotate: degrees(34 - index * 8),
      color: goldLight,
    });
  }
}

export async function buildCertificatePdf({
  participantName,
  courseTitle,
  issueDate,
  signatureBytes,
  fontRegularBytes,
  fontBoldBytes,
}: CertificateInput): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  pdf.registerFontkit(fontkit);
  const page = pdf.addPage([841.89, 595.28]);
  const { width, height } = page.getSize();
  const regular = await pdf.embedFont(fontRegularBytes, { subset: true });
  const bold = await pdf.embedFont(fontBoldBytes, { subset: true });
  const signature = await pdf.embedPng(signatureBytes);
  const center = width / 2;

  page.drawRectangle({ x: 0, y: 0, width, height, color: ivory });
  page.drawRectangle({ x: 16, y: 16, width: width - 32, height: height - 32, borderColor: gold, borderWidth: 2.2 });
  page.drawRectangle({ x: 23, y: 23, width: width - 46, height: height - 46, borderColor: goldLight, borderWidth: 0.55 });
  page.drawLine({ start: { x: 23, y: height - 30 }, end: { x: width - 23, y: height - 30 }, thickness: 0.65, color: gold });
  page.drawRectangle({ x: width - 105, y: height - 32, width: 76, height: 4, color: orange });
  page.drawRectangle({ x: 23, y: 18, width: 76, height: 4, color: orange });

  drawCornerDecorations(page, width, height);

  const heading = 'CERTIFICATE OF COMPLETION';
  page.drawText(heading, {
    x: centeredX(heading, 27, center, bold),
    y: 463,
    size: 27,
    font: bold,
    color: navy,
  });
  page.drawLine({ start: { x: 232, y: 443 }, end: { x: 390, y: 443 }, thickness: 1.05, color: gold });
  page.drawRectangle({ x: center - 4, y: 439, width: 8, height: 8, rotate: degrees(45), color: orange });
  page.drawLine({ start: { x: 452, y: 443 }, end: { x: 610, y: 443 }, thickness: 1.05, color: gold });

  const awarded = 'This certificate is proudly awarded to';
  page.drawText(awarded, {
    x: centeredX(awarded, 13, center, regular),
    y: 402,
    size: 13,
    font: regular,
    color: muted,
  });

  const nameSize = fitSize(participantName, 32, 560, bold);
  page.drawText(participantName, {
    x: centeredX(participantName, nameSize, center, bold),
    y: 352,
    size: nameSize,
    font: bold,
    color: ink,
  });
  page.drawLine({ start: { x: 198, y: 337 }, end: { x: 635, y: 337 }, thickness: 0.9, color: gold });

  const completion = 'for successfully completing all course requirements for';
  page.drawText(completion, {
    x: centeredX(completion, 12.5, center, regular),
    y: 292,
    size: 12.5,
    font: regular,
    color: muted,
  });

  const courseSize = fitSize(courseTitle, 25, 500, bold);
  page.drawText(courseTitle, {
    x: centeredX(courseTitle, courseSize, center, bold),
    y: 244,
    size: courseSize,
    font: bold,
    color: cyan,
  });
  page.drawLine({ start: { x: 248, y: 224 }, end: { x: 377, y: 224 }, thickness: 0.9, color: cyan });
  page.drawRectangle({ x: center - 4, y: 220, width: 8, height: 8, rotate: degrees(45), color: orange });
  page.drawLine({ start: { x: 465, y: 224 }, end: { x: 594, y: 224 }, thickness: 0.9, color: cyan });

  drawAwardSeal(page, 724, 335);

  const leftX = 190;
  const rightX = 585;
  page.drawText(issueDate, {
    x: centeredX(issueDate, 11.5, leftX, regular),
    y: 113,
    size: 11.5,
    font: regular,
    color: ink,
  });
  page.drawLine({ start: { x: leftX - 82, y: 101 }, end: { x: leftX + 82, y: 101 }, thickness: 0.75, color: navy });
  page.drawText('DATE OF ISSUE', {
    x: centeredX('DATE OF ISSUE', 9, leftX, bold),
    y: 82,
    size: 9,
    font: bold,
    color: muted,
  });

  page.drawImage(signature, {
    x: rightX - 105,
    y: 109,
    width: 210,
    height: 70,
  });
  page.drawLine({ start: { x: rightX - 94, y: 101 }, end: { x: rightX + 94, y: 101 }, thickness: 0.75, color: navy });
  page.drawText('TESTING IN ARABIC', {
    x: centeredX('TESTING IN ARABIC', 10, rightX, bold),
    y: 82,
    size: 10,
    font: bold,
    color: ink,
  });
  page.drawText('ISSUED BY', {
    x: centeredX('ISSUED BY', 8.5, rightX, bold),
    y: 66,
    size: 8.5,
    font: bold,
    color: muted,
  });

  const website = 'testing-arabic.com';
  const websiteSize = 10.5;
  const websiteWidth = bold.widthOfTextAtSize(website, websiteSize);
  page.drawText(website, {
    x: center - websiteWidth / 2,
    y: 31,
    size: websiteSize,
    font: bold,
    color: navy,
  });
  page.drawLine({ start: { x: 154, y: 36 }, end: { x: center - websiteWidth / 2 - 16, y: 36 }, thickness: 0.75, color: gold });
  page.drawLine({ start: { x: center + websiteWidth / 2 + 16, y: 36 }, end: { x: 688, y: 36 }, thickness: 0.75, color: gold });

  pdf.setTitle(`Certificate of Completion - ${courseTitle}`);
  pdf.setAuthor('Testing in Arabic');
  pdf.setSubject(`Course completion certificate for ${participantName}`);
  pdf.setCreationDate(new Date());
  return pdf.save();
}
