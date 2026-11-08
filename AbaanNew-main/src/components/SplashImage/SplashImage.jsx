import { useState } from "react";

export default function SplashImage({bgColor = "inherit",imgSrc,className}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className} flex items-center justify-center overflow-hidden rounded-xl`}>
      {!isLoaded && (
        <div className="absolute inset-0 w-full h-full bg-black/5 animate-pulse" />
      )}
      <img
        src={imgSrc}
        alt="Splash"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        className={`w-full h-[94%] object-contain mix-blend-multiply transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
