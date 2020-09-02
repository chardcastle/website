import { useEffect, useState } from 'react';

function useWindowScrolled() {
  const [isVisible, setIsVisible] = useState(false);
  const visibilityBreakPointInPixels = 400;

  useEffect(() => {
    const checkIsVisible = () => {
      if (window.pageYOffset > visibilityBreakPointInPixels) {
        setIsVisible(true);
      } else if (window.pageYOffset <= visibilityBreakPointInPixels) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkIsVisible);
    return () => {
      window.removeEventListener('scroll', checkIsVisible);
    };
  }, []);

  return isVisible;
}

export default useWindowScrolled;
