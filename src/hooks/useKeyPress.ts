import { useEffect, useState } from 'react';

/**
 * useKeyPress – returns true while the target key is pressed.
 * @param targetKey - the key value from KeyboardEvent.key (e.g. "Escape")
 */
export function useKeyPress(targetKey: string): boolean {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const downHandler = (e: KeyboardEvent) => {
      if (e.key === targetKey) {
        setPressed(true);
      }
    };
    const upHandler = (e: KeyboardEvent) => {
      if (e.key === targetKey) {
        setPressed(false);
      }
    };
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]);

  return pressed;
}