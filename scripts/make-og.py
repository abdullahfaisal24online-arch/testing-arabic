"""يولّد صورة المشاركة الافتراضية public/og-default.png بألوان الهوية.
التشغيل:  python3 scripts/make-og.py
يحتاج:    pip install pillow fonttools brotli
"""
import os
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont

W, H = 1200, 630
NAVY = (13, 27, 51)
CYAN = (56, 189, 248)
ORANGE = (246, 130, 59)
INK = (232, 238, 249)
MUTED = (147, 164, 192)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'node_modules/@fontsource/ibm-plex-sans-arabic/files')
TMP = '/tmp/og-fonts'
os.makedirs(TMP, exist_ok=True)


def ttf(subset, weight):
    dst = os.path.join(TMP, f'{subset}-{weight}.ttf')
    if not os.path.exists(dst):
        src = os.path.join(SRC, f'ibm-plex-sans-arabic-{subset}-{weight}-normal.woff2')
        if not os.path.exists(src):
            src = src.replace('.woff2', '.woff')
        f = TTFont(src)
        f.flavor = None
        f.save(dst)
    return dst


ar_bold = ImageFont.truetype(ttf('arabic', '700'), 60)
ar_mid = ImageFont.truetype(ttf('arabic', '400'), 30)
la_bold = ImageFont.truetype(ttf('latin', '700'), 34)
la_mono = ImageFont.truetype(ttf('latin', '400'), 24)

img = Image.new('RGB', (W, H), NAVY)
d = ImageDraw.Draw(img)

# شبكة نقاط خفيفة
for y in range(0, H, 28):
    for x in range(0, W, 28):
        d.point((x, y), fill=(20, 40, 70))

# شريط برتقالي سفلي
d.rectangle([0, H - 8, W, H], fill=ORANGE)

M = 72  # الهامش
# شعار: دائرة + شاشة + صح
cx, cy, r = W - M - 40, M + 40, 40
d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(10, 20, 40), outline=CYAN, width=4)
d.rounded_rectangle([cx - 20, cy - 15, cx + 20, cy + 10], radius=4, outline=INK, width=3)
d.line([cx - 8, cy + 20, cx + 8, cy + 20], fill=INK, width=3)
d.line([cx, cy + 10, cx, cy + 20], fill=INK, width=3)
d.line([cx - 9, cy - 3, cx - 3, cy + 3, cx + 9, cy - 9], fill=CYAN, width=4, joint='curve')

# اسم القناة بجانب الشعار
d.text((cx - r - 18, cy - 26), 'Testing', font=la_bold, fill=INK, anchor='ra')
d.text((cx - r - 18, cy + 2), 'بالعربي', font=ar_mid, fill=MUTED, anchor='ra',
       direction='rtl', language='ar')

# العنوان
d.text((W - M, 250), 'تعلّم اختبار البرمجيات بالعربي',
       font=ar_bold, fill=INK, anchor='ra', direction='rtl', language='ar')
d.text((W - M, 340), 'دروس ومسارات ومقالات مجاناً، من الصفر لحدّ الأتمتة',
       font=ar_mid, fill=MUTED, anchor='ra', direction='rtl', language='ar')

# الدومين
d.text((W - M, H - 100), 'testing-arabic.com', font=la_mono, fill=CYAN, anchor='ra')

out = os.path.join(ROOT, 'public', 'og-default.png')
img.save(out, 'PNG', optimize=True)
print('wrote', out, os.path.getsize(out), 'bytes')
