import { useState, useEffect, useRef } from "react";

export function useInView(options: IntersectionObserverInit = { threshold: 0.1 }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.root]);

  return { ref, isInView };
}
