import fontkit from '@pdf-lib/fontkit';
import { PDFDocument, rgb } from 'pdf-lib';

interface CertificateInput {
  participantName: string;
  courseTitle: string;
  issueDate: string;
  logoBytes: ArrayBuffer | Uint8Array;
  fontRegularBytes: ArrayBuffer | Uint8Array;
  fontBoldBytes: ArrayBuffer | Uint8Array;
}

const navy = rgb(0.035, 0.09, 0.17);
const cyan = rgb(0.05, 0.64, 0.86);
const orange = rgb(0.95, 0.4, 0.16);
const ink = rgb(0.08, 0.12, 0.18);
const muted = rgb(0.36, 0.42, 0.48);

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

  page.drawRectangle({ x: 0, y: 0, width, height, color: rgb(0.985, 0.982, 0.965) });
  page.drawRectangle({ x: 22, y: 22, width: width - 44, height: height - 44, borderColor: navy, borderWidth: 3 });
  page.drawRectangle({ x: 30, y: 30, width: width - 60, height: height - 60, borderColor: cyan, borderWidth: 0.9 });

  page.drawRectangle({ x: 22, y: height - 28, width: 152, height: 6, color: cyan });
  page.drawRectangle({ x: width - 174, y: 22, width: 152, height: 6, color: orange });

  const logoSize = 88;
  page.drawImage(logo, {
    x: (width - logoSize) / 2,
    y: height - 132,
    width: logoSize,
    height: logoSize,
  });

  const heading = 'CERTIFICATE OF COMPLETION';
  page.drawText(heading, {
    x: centeredX(heading, 27, width, bold),
    y: 420,
    size: 27,
    font: bold,
    color: navy,
  });
  page.drawLine({ start: { x: 310, y: 407 }, end: { x: 532, y: 407 }, thickness: 1.2, color: cyan });

  const awarded = 'This certificate is proudly awarded to';
  page.drawText(awarded, {
    x: centeredX(awarded, 13, width, regular),
    y: 370,
    size: 13,
    font: regular,
    color: muted,
  });

  const nameSize = fitSize(participantName, 31, 620, bold);
  page.drawText(participantName, {
    x: centeredX(participantName, nameSize, width, bold),
    y: 322,
    size: nameSize,
    font: bold,
    color: ink,
  });
  page.drawLine({ start: { x: 170, y: 310 }, end: { x: width - 170, y: 310 }, thickness: 0.8, color: rgb(0.72, 0.75, 0.77) });

  const completion = 'for successfully completing all course requirements for';
  page.drawText(completion, {
    x: centeredX(completion, 12.5, width, regular),
    y: 278,
    size: 12.5,
    font: regular,
    color: muted,
  });

  const courseSize = fitSize(courseTitle, 24, 650, bold);
  page.drawText(courseTitle, {
    x: centeredX(courseTitle, courseSize, width, bold),
    y: 233,
    size: courseSize,
    font: bold,
    color: cyan,
  });

  const watched = 'All video lessons completed with at least 90% watched';
  page.drawText(watched, {
    x: centeredX(watched, 10.5, width, regular),
    y: 205,
    size: 10.5,
    font: regular,
    color: muted,
  });

  const leftX = 190;
  const rightX = width - 190;
  page.drawLine({ start: { x: leftX - 70, y: 126 }, end: { x: leftX + 70, y: 126 }, thickness: 0.8, color: navy });
  page.drawLine({ start: { x: rightX - 70, y: 126 }, end: { x: rightX + 70, y: 126 }, thickness: 0.8, color: navy });
  page.drawText(issueDate, {
    x: leftX - regular.widthOfTextAtSize(issueDate, 11) / 2,
    y: 139,
    size: 11,
    font: regular,
    color: ink,
  });
  page.drawText('DATE OF ISSUE', {
    x: leftX - bold.widthOfTextAtSize('DATE OF ISSUE', 9) / 2,
    y: 109,
    size: 9,
    font: bold,
    color: muted,
  });
  const issuer = 'TESTING IN ARABIC';
  page.drawText(issuer, {
    x: rightX - bold.widthOfTextAtSize(issuer, 11) / 2,
    y: 139,
    size: 11,
    font: bold,
    color: ink,
  });
  page.drawText('ISSUED BY', {
    x: rightX - bold.widthOfTextAtSize('ISSUED BY', 9) / 2,
    y: 109,
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
