import React, { useState } from "react";

export default function FallbackImage({ src, fallback, alt, href }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const handleError = () => {
    setCurrentSrc(fallback);
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        src={currentSrc}
        className="Xacct nolb"
        alt={alt}
        title={alt}
        onError={handleError}
      />
    </a>
  );
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
