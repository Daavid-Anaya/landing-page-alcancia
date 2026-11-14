import 'lenis/dist/lenis.css';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Scroll animations of the landing page.
 *
 * The page is complete without this script: every illustration is drawn in its final state and the scripts only
 * rewind it and replay it with the scroll. With `prefers-reduced-motion` nothing here runs.
 *
 * Three layers, the pattern of github.com/midudev/mcp-higgsfield-landing:
 * 1. Lenis smooths the scroll and stays in sync with ScrollTrigger.
 * 2. Reveals use IntersectionObserver, never a scroll listener.
 * 3. Scrubbed effects (words, steps, pockets, route, waves) use ScrollTrigger.
 */

gsap.registerPlugin(ScrollTrigger);

function initSmoothScroll(): void {
  // Anchor links stop below the floating header through `scroll-padding-top` (global.css), which Lenis honors.
  const lenis = new Lenis({ autoRaf: false, anchors: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function initReveals(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
}

/** Problem sentence: each word goes from dim to full color, in reading order. */
function initWords(): void {
  document.querySelectorAll<HTMLElement>('[data-words]').forEach((block) => {
    const words = [...block.querySelectorAll<HTMLElement>('[data-word]')];
    const light = (self: ScrollTrigger) => {
      const lit = Math.round(self.progress * words.length);
      words.forEach((word, i) => word.classList.toggle('is-lit', i < lit));
    };
    ScrollTrigger.create({ trigger: block, start: 'top 80%', end: 'bottom 45%', onUpdate: light, onRefresh: light });
  });
}

/** How it works: the line fills and each step turns on when it reaches the reading area. */
function initSteps(): void {
  document.querySelectorAll<HTMLElement>('[data-steps]').forEach((section) => {
    const list = section.querySelector<HTMLElement>('[data-steps-list]');
    const fill = section.querySelector<HTMLElement>('[data-steps-fill]');
    if (!list || !fill) return;

    gsap.fromTo(
      fill,
      { scaleY: 0 },
      { scaleY: 1, ease: 'none', scrollTrigger: { trigger: list, start: 'top 65%', end: 'bottom 65%', scrub: 0.4 } },
    );

    section.querySelectorAll<HTMLElement>('[data-step]').forEach((step) => {
      ScrollTrigger.create({
        trigger: step,
        start: 'top 65%',
        onToggle: (self) => {
          // Stays on once passed; turns off only when scrolling back above it.
          if (self.isActive || self.direction > 0) step.classList.add('is-active');
        },
        onLeaveBack: () => step.classList.remove('is-active'),
      });
    });
  });
}

/** Where the coins come out, in the viewBox units of the pockets stage. */
const COIN_SOURCE = { x: 320, y: 44 } as const;
const COIN_FORK_Y = 128;
const COINS_BEFORE_GOAL = 10;

/**
 * Two pockets: ten coins split 3 and 7. Then the emergency goal is met and the next coins all go to the long term.
 * Pinned on large screens; on small ones it plays while the stage crosses the viewport.
 */
function initPockets(): void {
  document.querySelectorAll<HTMLElement>('[data-pockets]').forEach((track) => {
    const stage = track.querySelector<HTMLElement>('[data-pockets-stage]');
    const badge = track.querySelector<SVGGElement>('[data-goal-badge]');
    const coins = [...track.querySelectorAll<SVGGElement>('[data-coin]')];
    const phases = [...track.querySelectorAll<HTMLElement>('[data-phase]')];
    if (!stage || !badge || coins.length === 0) return;

    const build = (scrollTrigger: ScrollTrigger.Vars) => {
      const STEP = 0.55;
      const goalTime = COINS_BEFORE_GOAL * STEP + 0.4;
      const showPhase = (afterGoal: boolean) =>
        phases.forEach((phase, i) => phase.classList.toggle('is-active', (i === 1) === afterGoal));

      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger,
        onUpdate: () => showPhase(timeline.time() >= goalTime),
      });

      gsap.set(coins, { x: COIN_SOURCE.x, y: COIN_SOURCE.y, autoAlpha: 0 });
      showPhase(false);

      coins.forEach((coin, i) => {
        const at = i < COINS_BEFORE_GOAL ? i * STEP : goalTime + 0.6 + (i - COINS_BEFORE_GOAL) * STEP;
        timeline
          .to(coin, { autoAlpha: 1, duration: 0.05 }, at)
          .to(coin, { y: COIN_FORK_Y, duration: 0.3, ease: 'power1.in' }, at)
          .to(coin, { x: Number(coin.dataset.x), duration: 0.6, ease: 'power1.inOut' }, at + 0.3)
          .to(coin, { y: Number(coin.dataset.y), duration: 0.6, ease: 'power2.in' }, at + 0.3);
      });

      timeline.fromTo(
        badge,
        { scale: 0, transformOrigin: '50% 50%' },
        { scale: 1, duration: 0.4, ease: 'back.out(2.5)' },
        goalTime,
      );
      // A short rest at the end, so the last coin lands before the section releases.
      timeline.to({}, { duration: 0.5 });

      return () => phases.forEach((phase) => phase.classList.remove('is-active'));
    };

    const media = gsap.matchMedia();
    media.add('(min-width: 1024px) and (min-height: 720px)', () => {
      track.classList.add('is-pinned');
      const cleanup = build({ trigger: track, start: 'top top', end: 'bottom bottom', scrub: 0.6 });
      return () => {
        cleanup();
        track.classList.remove('is-pinned');
      };
    });
    media.add('(max-width: 1023px), (max-height: 719px)', () =>
      build({ trigger: stage, start: 'top 85%', end: 'bottom 55%', scrub: 0.6 }),
    );
  });
}

/** Family: the coin travels from the relative in the US to the wallet in Mexico. */
function initRoute(): void {
  document.querySelectorAll<HTMLElement>('[data-route]').forEach((figure) => {
    const path = figure.querySelector<SVGPathElement>('[data-route-path]');
    const coin = figure.querySelector<SVGGElement>('[data-route-coin]');
    const target = figure.querySelector<HTMLElement>('[data-route-target]');
    if (!path || !coin || !target) return;

    const length = path.getTotalLength();
    const state = { progress: 0 };
    const render = () => {
      const point = path.getPointAtLength(state.progress * length);
      coin.setAttribute('transform', `translate(${point.x.toFixed(1)} ${point.y.toFixed(1)})`);
      // The coin fades into the wallet at the end of the route.
      coin.style.opacity = String(gsap.utils.clamp(0, 1, (1 - state.progress) / 0.04));
      path.style.strokeDashoffset = String(1 - state.progress);
      target.classList.toggle('is-received', state.progress > 0.97);
    };

    path.style.strokeDasharray = '1';
    render();
    gsap.to(state, {
      progress: 1,
      ease: 'none',
      onUpdate: render,
      scrollTrigger: { trigger: figure, start: 'top 75%', end: 'top 20%', scrub: 0.5 },
    });
  });
}

/** Strategies: each illustrative wave draws itself from left to right. */
function initWaves(): void {
  document.querySelectorAll<SVGPathElement>('[data-wave]').forEach((path) => {
    gsap.fromTo(
      path,
      { strokeDasharray: 1, strokeDashoffset: 1 },
      { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: path, start: 'top 90%', end: 'top 50%', scrub: 0.5 } },
    );
  });
}

/** Hero: the jar drifts up slightly while the hero leaves the screen. */
function initHeroParallax(): void {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  const art = hero?.querySelector<HTMLElement>('[data-hero-art]');
  if (!hero || !art) return;
  gsap.to(art, {
    yPercent: -10,
    ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
  });
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  // From here on the CSS may hide what the scripts reveal (see global.css).
  document.documentElement.classList.add('motion');

  initSmoothScroll();
  initReveals();
  initWords();
  initSteps();
  initPockets();
  initRoute();
  initWaves();
  initHeroParallax();

  // The web font changes text heights, and with them every trigger position.
  void document.fonts.ready.then(() => ScrollTrigger.refresh());
}
