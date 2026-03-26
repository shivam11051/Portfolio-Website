/**
 * Shim for gsap-trial/SplitText (Club GSAP plugin)
 * Returns empty arrays so GSAP animations targeting .chars/.words are no-ops.
 * Text renders normally - just without per-character animation.
 */
export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];

  constructor(targets: string | HTMLElement | (string | HTMLElement)[], _opts?: unknown) {
    let els: HTMLElement[] = [];
    if (typeof targets === "string") {
      els = Array.from(document.querySelectorAll(targets));
    } else if (targets instanceof HTMLElement) {
      els = [targets];
    } else if (Array.isArray(targets)) {
      targets.forEach(t => {
        if (typeof t === "string") els.push(...Array.from(document.querySelectorAll(t) as NodeListOf<HTMLElement>));
        else if (t instanceof HTMLElement) els.push(t);
      });
    }
    
    this.chars = els;
    this.words = els;
    this.lines = els;
  }

  revert() {}
}
