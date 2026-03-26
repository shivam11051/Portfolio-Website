/**
 * Shim for gsap-trial/react (useGSAP hook).
 * The public gsap package exposes useGSAP via @gsap/react which we can't use,
 * so we shim it with a simple useEffect wrapper.
 */
import { useEffect } from "react";

export function useGSAP(fn: () => void | (() => void), deps?: unknown[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fn, deps as React.DependencyList | undefined);
}
