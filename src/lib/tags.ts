/** يحوّل الوسم لصيغة صالحة بالرابط مع الحفاظ على العربي */
export const tagSlug = (tag: string) => tag.trim().replace(/\s+/g, '-');

export type TaggedItem = {
  title: string;
  description: string;
  href: string;
  kind: string;
  date: Date;
};
