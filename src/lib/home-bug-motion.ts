/** Geometry shared by walking, flight and hit targets. Coordinates are section-local. */
export type Point = { x: number; y: number };
export type Obstacle = { left: number; top: number; right: number; bottom: number };
export type Space = { width: number; height: number; obstacles: Obstacle[] };
export type Route = { from: Point; to: Point; control: Point };
export const HIT_RADIUS = 22;
export function safe(p: Point, space: Space): boolean {
  const r = HIT_RADIUS;
  return p.x >= r && p.x <= space.width - r && p.y >= r && p.y <= space.height - r &&
    !space.obstacles.some(o => p.x > o.left - r && p.x < o.right + r && p.y > o.top - r && p.y < o.bottom + r);
}
export const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);
export function sample(route: Route, t: number): Point {
  const u = 1 - t;
  return { x: u*u*route.from.x + 2*u*t*route.control.x + t*t*route.to.x,
    y: u*u*route.from.y + 2*u*t*route.control.y + t*t*route.to.y };
}
export function makeRoute(from: Point, to: Point, space: Space): Route | null {
  const length = distance(from, to), bend = Math.min(24, length * .16);
  for (const offset of [bend, -bend, 0]) {
    const route = { from: { ...from }, to: { ...to }, control: {
      x: (from.x + to.x) / 2 - (to.y - from.y) / (length || 1) * offset,
      y: (from.y + to.y) / 2 + (to.x - from.x) / (length || 1) * offset,
    }};
    // Sample at <=4px spacing, including the complete 44px hit target.
    const steps = Math.max(24, Math.ceil(length / 4));
    if (Array.from({ length: steps + 1 }, (_, i) => sample(route, i / steps)).every(p => safe(p, space))) return route;
  }
  return null;
}
export function perches(space: Space): Point[] {
  const xs = new Set([22, space.width - 22]), ys = new Set([22, space.height - 22]);
  for (let x = 40; x < space.width - 22; x += 38) xs.add(x);
  // Content borders offer perches around the video and game cards, not over them.
  space.obstacles.forEach(o => { ys.add(o.top - 24); ys.add(o.bottom + 24); xs.add(o.left - 24); xs.add(o.right + 24); });
  for (let y = 60; y < space.height - 22; y += 48) ys.add(y);
  return [...ys].flatMap(y => [...xs].map(x => ({ x, y }))).filter(p => safe(p, space));
}
export function spread(points: Point[], count: number): Point[] {
  if (!points.length) return [];
  const chosen = [points[Math.floor(points.length * .22)]];
  while (chosen.length < count) {
    const next = points.reduce((best, p) => {
      const score = Math.min(...chosen.map(c => distance(c, p)));
      return score > best.score ? { p, score } : best;
    }, { p: points[0], score: -1 });
    if (next.score < 78) break;
    chosen.push(next.p);
  }
  return chosen;
}
