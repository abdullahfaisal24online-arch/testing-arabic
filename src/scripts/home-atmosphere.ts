import { distance, makeRoute, perches, safe, sample, spread, type Point, type Route, type Space } from '../lib/home-bug-motion';

const layer = document.getElementById('home-atmosphere');
const hero = layer?.parentElement;
const swarm = document.getElementById('home-bug-swarm');
const toggle = hero?.querySelector<HTMLButtonElement>('.home-motion-toggle');
if (hero && layer && swarm && toggle) {
  const web = layer.querySelector<SVGElement>('.home-web')!;
  const buttons = [...swarm.querySelectorAll<HTMLButtonElement>('.home-bug')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const mobile = matchMedia('(max-width: 760px)');
  const regions = [hero, document.querySelector<HTMLElement>('#main .games')].filter((el): el is HTMLElement => !!el);
  const visible = new Map<HTMLElement, number>();
  const animations = new Set<Animation>();
  type Bug = { button: HTMLButtonElement; turn: HTMLElement; p: Point; angle: number; mode: 'idle'|'inspect'|'walk'|'fly'; route: Route|null; started: number; duration: number; next: number; cooldown: number; hover: boolean; flightDue: number; away: Point|null };
  const bugs: Bug[] = buttons.map((button, i) => ({ button, turn: button.querySelector<HTMLElement>('.lady-turn')!, p: {x:22,y:22}, angle: i*65, mode: 'idle', route: null, started: 0, duration: 0, next: 1+i*3, cooldown: 0, hover: false, flightDue: 18+i*11, away: null }));
  let active = hero, space: Space = {width:0,height:0,obstacles:[]}, points: Point[] = [], count = 0;
  let manualPause = false, videoPlaying = false, frame = 0, last = 0, now = 0, measuring = 0;
  try { manualPause = localStorage.getItem('ta-home-motion') === 'paused'; } catch { /* optional preference */ }
  const paused = () => manualPause || reduced.matches;
  const running = () => !paused() && !document.hidden && (visible.get(active) ?? 0) > 0 && !(active === hero && videoPlaying);
  const moving = () => bugs.slice(0,count).filter(b => b.mode==='walk'||b.mode==='fly').length;
  const busy = () => mobile.matches ? 1 : 2;
  const stop = (b: Bug) => { b.mode='idle'; b.route=null; b.next=now+2; b.away=null; };

  function draw() {
    swarm!.hidden = reduced.matches || count === 0;
    bugs.forEach((b,i) => {
      b.button.hidden = i >= count;
      if (i >= count) return;
      b.button.style.transform=`translate3d(${(b.p.x-22).toFixed(2)}px,${(b.p.y-22).toFixed(2)}px,0)`;
      b.turn.style.rotate=`${b.angle.toFixed(1)}deg`;
      b.button.classList.toggle('is-walking', b.mode==='walk');
      b.button.classList.toggle('is-flying', b.mode==='fly');
      b.button.classList.toggle('is-resting', b.mode==='idle'||b.mode==='inspect');
      b.button.classList.toggle('is-still', !running());
    });
  }
  function measure() {
    const rect=active.getBoundingClientRect();
    const obstacles=[...active.querySelectorAll<HTMLElement>(active===hero?'.hero-txt, .feat, .home-motion-toggle':'.section-head, .game-card')]
      .filter(el=>!el.hidden).map(el=>{const r=el.getBoundingClientRect();return{left:r.left-rect.left,top:r.top-rect.top,right:r.right-rect.left,bottom:r.bottom-rect.top};});
    space={width:active.clientWidth,height:active.clientHeight,obstacles};
    points=perches(space);
    const seats=spread(points,mobile.matches?2:4);
    count=seats.length;
    bugs.forEach((b,i)=>{
      if(i>=count)return;
      // Layout changes cancel routes before placing targets in the newly measured safe area.
      stop(b);b.p={...seats[i]};b.next=now+1+i*2.7;b.hover=false;b.flightDue=now+18+i*11;
      b.button.classList.toggle('is-peeking',i===count-1&&!paused());
    });
    draw();
  }
  function sync() {
    document.body.dataset.homeMotion=paused()?'paused':'running';
    toggle!.hidden=reduced.matches;
    toggle!.textContent=manualPause?'تشغيل التأثيرات':'إيقاف التأثيرات';
    toggle!.setAttribute('aria-pressed',String(paused()));
    if(paused()){animations.forEach(a=>a.cancel());animations.clear();web.classList.remove('is-shivering');}
    if(running()&&!frame){last=0;frame=requestAnimationFrame(tick);}
    else if(!running()){cancelAnimationFrame(frame);frame=0;last=0;}
    draw();
  }
  function pick(b: Bug, fly: boolean, away: Point|null): Route|null {
    const occupied=bugs.slice(0,count).filter(other=>other!==b).flatMap(other=>[other.p,...(other.route?[other.route.to]:[])]);
    let choices=points.filter(p=>distance(p,b.p)>(fly?65:45)&&distance(p,b.p)<(fly?270:170)&&occupied.every(o=>distance(p,o)>66));
    // Flight stays within a clear corridor; no route is allowed across copy, player or buttons.
    choices=choices.sort((a,c)=>away?distance(c,away)-distance(a,away):Math.abs(distance(a,b.p)-(fly?175:95))-Math.abs(distance(c,b.p)-(fly?175:95)));
    for(const p of choices){
      const route=makeRoute(b.p,p,space);
      if(route&&Array.from({length:21},(_,i)=>sample(route,i/20)).every(q=>occupied.every(o=>distance(q,o)>48)))return route;
    }
    return null;
  }
  function begin(b: Bug, fly=false, away: Point|null=null, explicit=false) {
    if(!running()||b.button.hidden||b.mode==='fly')return;
    if(explicit) {
      // A click always takes priority over decorative walks and freezes the other bugs.
      bugs.filter(other=>other!==b).forEach(other=>{if(other.mode!=='idle')stop(other);other.next=now+3;});
    } else if(moving()>=busy()||bugs.some(other=>other.mode==='fly')) {b.next=now+1;return;}
    const route=pick(b,fly,away);
    if(!route){
      if(fly){ // A cramped layout still gets a short wing-opening hop in the same safe spot.
        b.route={from:{...b.p},to:{...b.p},control:{...b.p}};b.mode='fly';b.started=now;b.duration=1.1;
      }else{stop(b);b.next=now+3;}
      return;
    }
    b.route=route;b.mode=fly?'fly':'walk';b.started=now;b.duration=fly?1.65:Math.max(1.8,distance(route.from,route.to)/(away?65:26));b.away=null;b.cooldown=now+3;
  }
  function tick(time: number) {
    frame=0;if(!swarm!.isConnected||!running()){last=0;return;}
    const dt=last?Math.min((time-last)/1000,.06):0;last=time;now+=dt;
    bugs.slice(0,count).forEach(b=>{
      if(b.route){
        const raw=Math.min(1,(now-b.started)/b.duration);
        const flight=b.mode==='fly';
        let t=flight?Math.max(0,Math.min(1,(raw-.16)/.68)):raw;
        t=t*t*(3-2*t);
        const pos=sample(b.route,t),next=sample(b.route,Math.min(1,t+.025));
        if(distance(pos,next)>.05){
          const angle=Math.atan2(next.y-pos.y,next.x-pos.x)*180/Math.PI+90;
          b.angle+=((angle-b.angle+540)%360)-180;
        }
        b.p=pos;
        if(raw===1){stop(b);b.next=now+3+Math.random()*6;if(flight)b.flightDue=now+28+Math.random()*20;}
      }else if(b.mode==='inspect'&&now>=b.next){const away=b.away;stop(b);begin(b,false,away);}
      else if(b.mode==='idle'&&now>=b.next&&!b.hover&&document.activeElement!==b.button){begin(b,now>=b.flightDue);}
    });
    draw();frame=requestAnimationFrame(tick);
  }
  buttons.forEach((button,i)=>{
    const b=bugs[i];
    button.addEventListener('animationend',e=>{if(e.animationName==='lady-peek')button.classList.remove('is-peeking');});
    button.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'&&b.mode!=='fly'){b.hover=true;stop(b);draw();}});
    button.addEventListener('pointerleave',()=>{b.hover=false;b.next=now+1.2;});
    button.addEventListener('pointerdown',()=>{if(b.mode!=='fly'){stop(b);draw();}});
    button.addEventListener('focus',()=>{if(b.mode!=='fly'){stop(b);draw();}});
    button.addEventListener('blur',()=>{b.next=now+1.5;});
    button.addEventListener('click',e=>{e.stopPropagation();b.hover=false;if(e.detail>0)button.blur();begin(b,true,null,true);draw();});
  });
  regions.forEach(region=>region.addEventListener('pointermove',e=>{
    if(region!==active||!running()||!fine.matches||e.pointerType==='touch')return;
    const rect=active.getBoundingClientRect(),pointer={x:e.clientX-rect.left,y:e.clientY-rect.top};
    if(active===hero&&pointer.x<138&&pointer.y<62)web.classList.add('is-shivering');
    // Outside the click target: inspect, turn away, then walk along a different safe curve.
    if(e.target instanceof Element&&e.target.closest('.home-bug'))return;
    const closest=bugs.slice(0,count).filter(b=>b.mode!=='fly'&&!b.hover&&document.activeElement!==b.button&&now>b.cooldown)
      .sort((a,b)=>distance(a.p,pointer)-distance(b.p,pointer))[0];
    if(closest&&distance(closest.p,pointer)<100&&distance(closest.p,pointer)>34&&moving()<busy()){
      stop(closest);closest.mode='inspect';closest.away=pointer;closest.next=now+.3;closest.cooldown=now+3;
      const angle=Math.atan2(closest.p.y-pointer.y,closest.p.x-pointer.x)*180/Math.PI+90;
      closest.angle+=((angle-closest.angle+540)%360)-180;
    }
  },{passive:true}));
  web.addEventListener('animationend',()=>web.classList.remove('is-shivering'));
  toggle.addEventListener('click',()=>{manualPause=!manualPause;try{localStorage.setItem('ta-home-motion',manualPause?'paused':'running');}catch{}sync();});
  reduced.addEventListener('change',sync);
  mobile.addEventListener('change',()=>{measure();sync();});
  document.addEventListener('visibilitychange',sync);
  const visibility=new IntersectionObserver(entries=>{
    entries.forEach(e=>visible.set(e.target as HTMLElement,e.isIntersecting?e.intersectionRect.width*e.intersectionRect.height:0));
    const next=regions.reduce((best,r)=>(visible.get(r)??0)>(visible.get(best)??0)?r:best,active);
    if(next!==active&&!buttons.includes(document.activeElement as HTMLButtonElement)){
      active=next;active.appendChild(swarm!);measure();
    }
    sync();
  },{threshold:[0,.1,.25,.5,.75,1]});
  regions.forEach(r=>visibility.observe(r));
  const resize=new ResizeObserver(()=>{cancelAnimationFrame(measuring);measuring=requestAnimationFrame(()=>{measure();sync();});});
  regions.forEach(r=>resize.observe(r));
  const player=hero.querySelector<HTMLIFrameElement>('iframe[src*="iframe.mediadelivery.net"]');
  window.addEventListener('message',e=>{
    if(!player||e.origin!=='https://iframe.mediadelivery.net'||e.source!==player.contentWindow||e.data?.channel!=='bunnystream')return;
    if(e.data.event==='play')videoPlaying=true;else if(e.data.event==='pause'||e.data.event==='ended')videoPlaying=false;else return;sync();
  });
  const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;reveal.unobserve(entry.target);
    if(paused()||typeof entry.target.animate!=='function')return;
    const animation=entry.target.animate([{opacity:.7,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:340,easing:'cubic-bezier(.2,.7,.3,1)'});
    animations.add(animation);animation.finished.then(()=>animations.delete(animation),()=>animations.delete(animation));
  }),{threshold:.04});
  document.querySelectorAll('#main > .section').forEach(s=>reveal.observe(s));
  window.addEventListener('pagehide',()=>{cancelAnimationFrame(frame);cancelAnimationFrame(measuring);frame=0;last=0;});
  window.addEventListener('pageshow',sync);
  measure();sync();
}
