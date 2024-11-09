import React, { useState } from "react";

export default function FallbackImage({ src, fallback, alt }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const handleError = () => {
    setCurrentSrc(fallback);
  };

  return <img src={currentSrc} alt={alt} onError={handleError} />;
}

// export const FallbackImageOrig = ({ src, fallback, alt }) => (
//     <img
//       src={src}
//       alt={alt}
//       onError={(e) => {
//         e.target.onerror = null; // Prevent infinite loop
//         e.target.src = fallback;
//       }}
//     />
//   );
