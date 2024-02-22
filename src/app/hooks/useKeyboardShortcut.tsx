import { useEffect } from 'react';

function useKeyboardShortcut(shortcut: string, callback: () => void) {

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isAltKey = event.getModifierState('Alt') || event.key === 'Alt';
        if (isAltKey && event.key === shortcut) callback()
    }
    // Add event listener for keydown event
    window.addEventListener('keydown', handleKeyDown);

    // Clean up event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [shortcut, callback]);
}

export default useKeyboardShortcut;