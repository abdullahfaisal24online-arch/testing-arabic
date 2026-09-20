import fontkit from '@pdf-lib/fontkit';
import { degrees, PDFDocument, rgb } from 'pdf-lib';

interface CertificateInput {
  participantName: string;
  courseTitle: string;
  issueDate: string;
  backgroundBytes: ArrayBuffer | Uint8Array;
  sealBytes: ArrayBuffer | Uint8Array;
  signatureBytes: ArrayBuffer | Uint8Array;
  fontRegularBytes: ArrayBuffer | Uint8Array;
  fontBoldBytes: ArrayBuffer | Uint8Array;
}

const navy = rgb(0.035, 0.09, 0.17);
const cyan = rgb(0.03, 0.62, 0.86);
const orange = rgb(0.97, 0.36, 0.08);
const gold = rgb(0.79, 0.57, 0.2);
const ink = rgb(0.04, 0.11, 0.23);
const muted = rgb(0.24, 0.32, 0.43);

function centeredX(text: string, size: number, center: number, font: any) {
  return center - font.widthOfTextAtSize(text, size) / 2;
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
  backgroundBytes,
  sealBytes,
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
  const background = await pdf.embedJpg(backgroundBytes);
  const seal = await pdf.embedPng(sealBytes);
  const signature = await pdf.embedPng(signatureBytes);
  const center = width / 2;

  // الخلفية المعتمدة تشمل الإطار الهندسي والختم فقط؛ النصوص تظل ديناميكية.
  page.drawImage(background, { x: 0, y: 0, width, height });
  page.drawImage(seal, {
    x: 650,
    y: 226,
    width: 137,
    height: 170,
  });

  const heading = 'CERTIFICATE OF COMPLETION';
  page.drawText(heading, {
    x: centeredX(heading, 27, center, bold),
    y: 462,
    size: 27,
    font: bold,
    color: navy,
  });
  page.drawLine({ start: { x: 235, y: 442 }, end: { x: 389, y: 442 }, thickness: 1.05, color: gold });
  page.drawRectangle({ x: center - 4, y: 438, width: 8, height: 8, rotate: degrees(45), color: orange });
  page.drawLine({ start: { x: 453, y: 442 }, end: { x: 607, y: 442 }, thickness: 1.05, color: gold });

  const awarded = 'This certificate is proudly awarded to';
  page.drawText(awarded, {
    x: centeredX(awarded, 13, center, regular),
    y: 399,
    size: 13,
    font: regular,
    color: muted,
  });

  const nameSize = fitSize(participantName, 32, 560, bold);
  page.drawText(participantName, {
    x: centeredX(participantName, nameSize, center, bold),
    y: 348,
    size: nameSize,
    font: bold,
    color: ink,
  });
  page.drawLine({ start: { x: 200, y: 332 }, end: { x: 633, y: 332 }, thickness: 0.9, color: gold });

  const completion = 'for successfully completing all course requirements for';
  page.drawText(completion, {
    x: centeredX(completion, 12.5, center, regular),
    y: 282,
    size: 12.5,
    font: regular,
    color: muted,
  });

  const courseSize = fitSize(courseTitle, 25, 500, bold);
  page.drawText(courseTitle, {
    x: centeredX(courseTitle, courseSize, center, bold),
    y: 232,
    size: courseSize,
    font: bold,
    color: cyan,
  });
  page.drawLine({ start: { x: 250, y: 212 }, end: { x: 376, y: 212 }, thickness: 0.9, color: cyan });
  page.drawRectangle({ x: center - 4, y: 208, width: 8, height: 8, rotate: degrees(45), color: orange });
  page.drawLine({ start: { x: 466, y: 212 }, end: { x: 592, y: 212 }, thickness: 0.9, color: cyan });

  const leftX = 190;
  const rightX = 580;
  page.drawText(issueDate, {
    x: centeredX(issueDate, 11.5, leftX, regular),
    y: 112,
    size: 11.5,
    font: regular,
    color: ink,
  });
  page.drawLine({ start: { x: leftX - 82, y: 99 }, end: { x: leftX + 82, y: 99 }, thickness: 0.75, color: navy });
  page.drawText('DATE OF ISSUE', {
    x: centeredX('DATE OF ISSUE', 9, leftX, bold),
    y: 80,
    size: 9,
    font: bold,
    color: muted,
  });

  page.drawImage(signature, {
    x: rightX - 105,
    y: 108,
    width: 210,
    height: 70,
  });
  page.drawLine({ start: { x: rightX - 94, y: 99 }, end: { x: rightX + 94, y: 99 }, thickness: 0.75, color: navy });
  page.drawText('TESTING IN ARABIC', {
    x: centeredX('TESTING IN ARABIC', 10, rightX, bold),
    y: 80,
    size: 10,
    font: bold,
    color: ink,
  });
  page.drawText('ISSUED BY', {
    x: centeredX('ISSUED BY', 8.5, rightX, bold),
    y: 64,
    size: 8.5,
    font: bold,
    color: muted,
  });

  const website = 'testing-arabic.com';
  const websiteSize = 10.5;
  const websiteWidth = bold.widthOfTextAtSize(website, websiteSize);
  page.drawText(website, {
    x: center - websiteWidth / 2,
    y: 30,
    size: websiteSize,
    font: bold,
    color: navy,
  });
  page.drawLine({ start: { x: 155, y: 35 }, end: { x: center - websiteWidth / 2 - 16, y: 35 }, thickness: 0.75, color: gold });
  page.drawLine({ start: { x: center + websiteWidth / 2 + 16, y: 35 }, end: { x: 687, y: 35 }, thickness: 0.75, color: gold });

  pdf.setTitle(`Certificate of Completion - ${courseTitle}`);
  pdf.setAuthor('Testing in Arabic');
  pdf.setSubject(`Course completion certificate for ${participantName}`);
  pdf.setCreationDate(new Date());
  return pdf.save();
}
