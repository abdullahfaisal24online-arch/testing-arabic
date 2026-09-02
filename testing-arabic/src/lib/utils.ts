import { BUNNY } from '../consts';

const dateFmt = new Intl.DateTimeFormat('ar-JO-u-nu-latn', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function formatDate(date: Date): string {
  return dateFmt.format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/** يحوّل "18:24" أو "1:05:30" إلى صيغة ISO 8601 التي تفهمها محركات البحث */
export function durationToISO(duration: string): string {
  const parts = duration.split(':').map((p) => parseInt(p, 10) || 0);
  let h = 0,
    m = 0,
    s = 0;
  if (parts.length === 3) [h, m, s] = parts;
  else if (parts.length === 2) [m, s] = parts;
  else [s] = parts;
  return `PT${h ? h + 'H' : ''}${m ? m + 'M' : ''}${s ? s + 'S' : ''}` || 'PT0S';
}

/** وقت القراءة التقريبي بالدقائق */
export function readingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
}

export function bunnyEmbed(videoId: string): string {
  if (!BUNNY.libraryId) return '';
  return `https://iframe.mediadelivery.net/embed/${BUNNY.libraryId}/${videoId}?autoplay=false&preload=false`;
}

export function bunnyThumb(videoId?: string, custom?: string): string | null {
  if (custom) return custom;
  if (!videoId || !BUNNY.cdnHostname) return null;
  return `https://${BUNNY.cdnHostname}/${videoId}/thumbnail.jpg`;
}

export function excerpt(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length <= max ? clean : clean.slice(0, max - 1).trimEnd() + '…';
}

/** جمع عربي صحيح: مفرد / مثنى / جمع قلة (3-10) / تمييز مفرد منصوب (11+) */
export function arabicPlural(
  n: number,
  forms: { one: string; two: string; few: string; many: string }
): string {
  if (n === 1) return forms.one;
  if (n === 2) return forms.two;
  if (n >= 3 && n <= 10) return `${n} ${forms.few}`;
  return `${n} ${forms.many}`;
}

export function minutesLabel(n: number): string {
  return arabicPlural(n, {
    one: 'دقيقة',
    two: 'دقيقتان',
    few: 'دقائق',
    many: 'دقيقة',
  });
}

export function lessonsLabel(n: number): string {
  return arabicPlural(n, { one: 'درس واحد', two: 'درسان', few: 'دروس', many: 'درساً' });
}
