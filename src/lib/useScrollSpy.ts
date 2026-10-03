import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    // If there's a hash in the URL on mount, set it immediately
    const hash = window.location.hash.slice(1);
    if (ids.includes(hash)) setActive(hash);

    const observer = new IntersectionObserver(
      (entries) => {
        // We only care about intersecting entries
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // If multiple are visible, usually the last one (furthest down) is the active one if we scroll down,
          // but for simplicity, we can just sort by top bounding rect or pick the first one intersecting.
          // Since intersection observer margin is tuned, usually only 1-2 intersect.
          const sorted = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive(sorted[0].target.id);
        }
      },
      // Root margin offsets the sticky header (~64px) and gives a buffer before the next section
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    elements.forEach((el) => observer.observe(el));

    // Handle scroll to bottom explicitly to select the last item
    const onScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        setActive(ids[ids.length - 1]);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);

  return active;
}
