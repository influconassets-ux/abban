import React, { useState } from "react";

export default function LazyImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  style = {},
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton Loader */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 w-full h-full bg-gray-200 animate-pulse rounded-md" />
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        style={style}
        {...props}
      />
    </div>
  );
}
