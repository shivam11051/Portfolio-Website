/**
 * Shim for gsap-trial/ScrollSmoother (Club GSAP plugin)
 * Provides a no-op stub so the app builds without the paid plugin.
 * The site loads normally without smooth scrolling.
 */
export class ScrollSmoother {
  static create(_opts?: Record<string, unknown>) {
    return new ScrollSmoother();
  }
  static refresh(_safe?: boolean) {}
  scrollTop(_val?: number) { return 0; }
  paused(_val?: boolean) {}
  scrollTo(target: string, smooth?: boolean, _position?: string) {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
    }
  }
}
