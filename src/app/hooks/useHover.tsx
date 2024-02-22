import { useEffect, useState } from 'react';

type HoverHook = () => [boolean, () => void , () => void ]

const useHover : HoverHook = () => {

  const [hoverDetected, setHoverDetected] = useState(false);

  const handleHover = () => {
    setHoverDetected(true);
  };

  const handleLeave = () => {
    setHoverDetected(false);
  };

  return [hoverDetected, handleHover, handleLeave]

};

export default useHover;
