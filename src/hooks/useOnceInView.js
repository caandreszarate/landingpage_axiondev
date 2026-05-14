import { useEffect, useRef } from 'react';

export function useOnceInView(ref, callback, threshold = 0.1) {
  const fired = useRef(false);
  const cb = useRef(callback);
  cb.current = callback;

  useEffect(() => {
    const el = ref.current;
    if (!el || fired.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          cb.current();
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // ref and threshold are stable — intentional omission
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
