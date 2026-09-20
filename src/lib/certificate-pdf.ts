import fontkit from '@pdf-lib/fontkit';
import { degrees, PDFDocument, rgb } from 'pdf-lib';

interface CertificateInput {
  participantName: string;
  courseTitle: string;
  issueDate: string;
  logoBytes: ArrayBuffer | Uint8Array;
  signatureBytes: ArrayBuffer | Uint8Array;
  fontRegularBytes: ArrayBuffer | Uint8Array;
  fontBoldBytes: ArrayBuffer | Uint8Array;
}

const navy = rgb(0.035, 0.09, 0.17);
// مطابق تقريباً للون زوايا ملف الشعار حتى يندمج بلا حدود مربّعة ظاهرة.
const headerNavy = rgb(16 / 255, 32 / 255, 57 / 255);
const cyan = rgb(0.05, 0.64, 0.86);
const orange = rgb(0.95, 0.4, 0.16);
const gold = rgb(0.79, 0.61, 0.29);
const ink = rgb(0.08, 0.12, 0.18);
const muted = rgb(0.36, 0.42, 0.48);
const ivory = rgb(0.985, 0.982, 0.965);

function centeredX(text: string, size: number, width: number, font: any) {
  return (width - font.widthOfTextAtSize(text, size)) / 2;
}

function fitSize(text: string, preferred: number, maxWidth: number, font: any, min = 13) {
  let size = preferred;
  while (size > min && font.widthOfTextAtSize(text, size) > maxWidth) size -= 1;
  return size;
}

export async function buildCertificatePdf({
  participantName,
  courseTitle,
  issueDate,
  logoBytes,
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
  const logo = await pdf.embedJpg(logoBytes);
  const signature = await pdf.embedPng(signatureBytes);

  page.drawRectangle({ x: 0, y: 0, width, height, color: ivory });
  page.drawRectangle({ x: 22, y: 22, width: width - 44, height: height - 44, borderColor: navy, borderWidth: 3 });
  page.drawRectangle({ x: 30, y: 30, width: width - 60, height: height - 60, borderColor: cyan, borderWidth: 0.9 });

  // خلفية تقنية خفيفة تعطي الشهادة شخصية المنصة بدون ما تزاحم النص.
  const circuit = rgb(0.73, 0.88, 0.93);
  [0, 1, 2, 3].forEach((index) => {
    const y = 390 - index * 34;
    const elbow = 74 + index * 13;
    page.drawLine({ start: { x: 31, y }, end: { x: elbow, y }, thickness: 0.65, color: circuit, opacity: 0.46 });
    page.drawLine({ start: { x: elbow, y }, end: { x: elbow + 25, y: y - 25 }, thickness: 0.65, color: circuit, opacity: 0.46 });
    page.drawCircle({ x: elbow + 25, y: y - 25, size: 2.3, color: circuit, opacity: 0.55 });

    page.drawLine({ start: { x: width - 31, y }, end: { x: width - elbow, y }, thickness: 0.65, color: circuit, opacity: 0.46 });
    page.drawLine({ start: { x: width - elbow, y }, end: { x: width - elbow - 25, y: y - 25 }, thickness: 0.65, color: circuit, opacity: 0.46 });
    page.drawCircle({ x: width - elbow - 25, y: y - 25, size: 2.3, color: circuit, opacity: 0.55 });
  });

  // هيدر مدموج بدل صورة الشعار المربّعة المنفصلة.
  page.drawSvgPath('M 0 0 L 520 0 L 455 104 L 65 104 Z', {
    x: (width - 520) / 2,
    y: height - 28,
    color: headerNavy,
  });
  page.drawLine({ start: { x: 45, y: height - 29 }, end: { x: 185, y: height - 29 }, thickness: 3, color: cyan });
  page.drawLine({ start: { x: width - 185, y: height - 29 }, end: { x: width - 45, y: height - 29 }, thickness: 3, color: cyan });
  page.drawLine({ start: { x: 45, y: height - 36 }, end: { x: 100, y: height - 36 }, thickness: 2, color: orange });
  page.drawLine({ start: { x: width - 100, y: height - 36 }, end: { x: width - 45, y: height - 36 }, thickness: 2, color: orange });

  const logoCenterY = height - 76;
  page.drawCircle({ x: width / 2, y: logoCenterY, size: 55, color: headerNavy, borderColor: gold, borderWidth: 1.4 });

  const logoSize = 96;
  page.drawImage(logo, {
    x: (width - logoSize) / 2,
    y: logoCenterY - logoSize / 2,
    width: logoSize,
    height: logoSize,
  });
  const logoX = (width - logoSize) / 2;
  const logoTop = logoCenterY + logoSize / 2;
  // قناع دائري يغطي زوايا ملف الشعار، فلا يظهر كمربّع فوق الهيدر.
  [
    'M 0 0 L 48 0 C 21.49 0 0 21.49 0 48 Z',
    'M 48 0 L 96 0 L 96 48 C 96 21.49 74.51 0 48 0 Z',
    'M 0 48 C 0 74.51 21.49 96 48 96 L 0 96 Z',
    'M 96 48 L 96 96 L 48 96 C 74.51 96 96 74.51 96 48 Z',
  ].forEach((path) => page.drawSvgPath(path, { x: logoX, y: logoTop, color: headerNavy }));
  page.drawCircle({ x: width / 2, y: logoCenterY, size: 49, borderColor: cyan, borderWidth: 1.8 });
  page.drawCircle({ x: width / 2, y: logoCenterY, size: 54, borderColor: gold, borderWidth: 1 });

  // أوراق ذهبية بسيطة حول الميدالية، قريبة من التصميم المعتمد.
  [0, 1, 2, 3, 4, 5].forEach((index) => {
    const y = logoCenterY - 29 + index * 12;
    const spread = 63 + Math.abs(index - 2.5) * 2.2;
    page.drawEllipse({
      x: width / 2 - spread,
      y,
      xScale: 2.6,
      yScale: 7,
      rotate: degrees(28 + index * 4),
      color: gold,
      opacity: 0.9,
    });
    page.drawEllipse({
      x: width / 2 + spread,
      y,
      xScale: 2.6,
      yScale: 7,
      rotate: degrees(-28 - index * 4),
      color: gold,
      opacity: 0.9,
    });
  });

  page.drawRectangle({ x: 22, y: height - 28, width: 150, height: 5, color: cyan });
  page.drawRectangle({ x: width - 172, y: 22, width: 150, height: 5, color: orange });

  const heading = 'CERTIFICATE OF COMPLETION';
  page.drawText(heading, {
    x: centeredX(heading, 27, width, bold),
    y: 410,
    size: 27,
    font: bold,
    color: navy,
  });
  page.drawLine({ start: { x: 287, y: 395 }, end: { x: 385, y: 395 }, thickness: 0.8, color: navy });
  page.drawRectangle({ x: width / 2 - 4, y: 391, width: 8, height: 8, rotate: degrees(45), color: orange });
  page.drawLine({ start: { x: 457, y: 395 }, end: { x: 555, y: 395 }, thickness: 0.8, color: navy });

  const awarded = 'This certificate is proudly awarded to';
  page.drawText(awarded, {
    x: centeredX(awarded, 13, width, regular),
    y: 360,
    size: 13,
    font: regular,
    color: muted,
  });

  const nameSize = fitSize(participantName, 31, 620, bold);
  page.drawText(participantName, {
    x: centeredX(participantName, nameSize, width, bold),
    y: 313,
    size: nameSize,
    font: bold,
    color: ink,
  });
  page.drawLine({ start: { x: 150, y: 298 }, end: { x: width - 150, y: 298 }, thickness: 0.8, color: gold });

  const completion = 'for successfully completing all course requirements for';
  page.drawText(completion, {
    x: centeredX(completion, 12.5, width, regular),
    y: 263,
    size: 12.5,
    font: regular,
    color: muted,
  });

  const courseSize = fitSize(courseTitle, 24, 650, bold);
  page.drawText(courseTitle, {
    x: centeredX(courseTitle, courseSize, width, bold),
    y: 214,
    size: courseSize,
    font: bold,
    color: cyan,
  });

  page.drawLine({ start: { x: 255, y: 193 }, end: { x: 374, y: 193 }, thickness: 0.8, color: cyan });
  page.drawRectangle({ x: width / 2 - 4, y: 189, width: 8, height: 8, rotate: degrees(45), color: cyan });
  page.drawLine({ start: { x: 468, y: 193 }, end: { x: 587, y: 193 }, thickness: 0.8, color: cyan });

  const leftX = 190;
  const rightX = width - 190;
  page.drawLine({ start: { x: leftX - 78, y: 105 }, end: { x: leftX + 78, y: 105 }, thickness: 0.8, color: navy });
  page.drawLine({ start: { x: rightX - 92, y: 105 }, end: { x: rightX + 92, y: 105 }, thickness: 0.8, color: navy });
  page.drawText(issueDate, {
    x: leftX - regular.widthOfTextAtSize(issueDate, 11) / 2,
    y: 118,
    size: 11,
    font: regular,
    color: ink,
  });
  page.drawText('DATE OF ISSUE', {
    x: leftX - bold.widthOfTextAtSize('DATE OF ISSUE', 9) / 2,
    y: 85,
    size: 9,
    font: bold,
    color: muted,
  });
  const issuer = 'TESTING IN ARABIC';
  page.drawImage(signature, {
    x: rightX - 100,
    y: 108,
    width: 200,
    height: 67,
  });
  page.drawText(issuer, {
    x: rightX - bold.widthOfTextAtSize(issuer, 11) / 2,
    y: 86,
    size: 10,
    font: bold,
    color: ink,
  });
  page.drawText('ISSUED BY', {
    x: rightX - bold.widthOfTextAtSize('ISSUED BY', 9) / 2,
    y: 69,
    size: 9,
    font: bold,
    color: muted,
  });

  pdf.setTitle(`Certificate of Completion - ${courseTitle}`);
  pdf.setAuthor('Testing in Arabic');
  pdf.setSubject(`Course completion certificate for ${participantName}`);
  pdf.setCreationDate(new Date());
  return pdf.save();
}
