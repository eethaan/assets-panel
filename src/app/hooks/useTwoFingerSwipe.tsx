import { useEffect, useState } from 'react';

const useTwoFingerSwipe = (handler: (direction: 'up' | 'down' | 'left' | 'right')  => void, scrollThreshold = 20) => {
    
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      // Check if the event.deltaX and event.deltaY properties are significant
      const deltaX = event.deltaX;
      const deltaY = event.deltaY;

      if (Math.abs(deltaX) > scrollThreshold || Math.abs(deltaY) > scrollThreshold) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Horizontal swipe
          handler(deltaX > 0 ? 'right' : 'left');
        } else {
          // Vertical swipe
          handler(deltaY > 0 ? 'down' : 'up');
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scrollThreshold, handler]);

};

export default useTwoFingerSwipe;