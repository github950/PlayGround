import { useEffect, useRef, useState } from 'react';

const CrossfadeVideo = ({ Video }) => {
  const [active, setActive] = useState(true);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const duration = 10; // seconds (should match your video duration)
    const interval = setInterval(() => {
      setActive((prev) => !prev);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        ref={videoRef1}
        src={Video}
        className={`absolute top-0 left-0 w-full h-full object-cover blur-xl transition-opacity duration-1000 ease-in-out ${
          active ? 'opacity-100 z-20' : 'opacity-0 z-10'
        }`}
        autoPlay
        muted
        playsInline
        loop
      />
      <video
        ref={videoRef2}
        src={Video}
        className={`absolute top-0 left-0 w-full h-full object-cover blur-xl transition-opacity duration-1000 ease-in-out ${
          !active ? 'opacity-100 z-20' : 'opacity-0 z-10'
        }`}
        autoPlay
        muted
        playsInline
        loop
      />
    </div>
  );
};

export default CrossfadeVideo;
