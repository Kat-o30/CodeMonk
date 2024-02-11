import { useLayoutEffect, useRef } from 'react';

export function useScrollProgress() {
  const ref = useRef();
  useLayoutEffect(() => {
    const updateProgress = () => {
      const totalScrollHeight = ref.current.scrollHeight - ref.current.offsetHeight;
      const scrollPosition = ref.current.scrollTop;
      const progress = (scrollPosition / totalScrollHeight) * 100;
      ref.current.style.setProperty('--scroll-progress', `${progress}%`);
    };
    ref.current.addEventListener('scroll', updateProgress);
    return () => ref.current.removeEventListener('scroll', updateProgress);
  }, []);
  return ref;
}