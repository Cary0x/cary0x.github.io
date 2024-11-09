import React, { useState } from "react";

global.arrErr = [];

export default function FallbackImage({ refc, data, hide = false }) {
  // export default function FallbackImage({ src, fallback, alt, href }) {
  // const [currentSrc, setCurrentSrc] = useState(src);
  const [currentSrc, setCurrentSrc] = useState(
    `https://res.cloudinary.com/dpr7n8ycn/image/upload/${data}.jpg`
  );
  const handleError = () => {
    arrErr.push(`filter:links from:${data} ref`);
    // setCurrentSrc(fallback);
    setCurrentSrc("https://abs-0.twimg.com/emoji/v2/svg/1f437.svg");
  };

  return (
    <div
      class="profile-container"
      style={{
        display: hide ? "none" : "",
      }}
    >
      <div
        className="profile-behind profile-top"
        style={{
          display: refc === undefined ? "none" : "",
        }}
      >
        <a
          href={"https://www.pond0x.com/swap/solana?ref=" + refc}
          className="top-right"
          target="_blank"
          rel="noopener noreferrer"
        >
          🤝
        </a>
      </div>
      {/* <a
        href={"https://x.com/" + data}
        target="_blank"
        rel="noopener noreferrer"
      > */}
      <img
        src={currentSrc}
        className="Xacct nolb profile-img"
        alt={data}
        title={data}
        onError={handleError}
      />
      {/* </a> */}
      <div className="profile-behind profile-bottom">
        <a
          href={"https://x.com/" + data}
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-left"
        >
          𝕏
        </a>
      </div>
    </div>
  );
  // return (
  //   <a href={href} target="_blank" rel="noopener noreferrer">
  //     <img
  //       src={currentSrc}
  //       className="Xacct nolb"
  //       alt={alt}
  //       title={alt}
  //       onError={handleError}
  //     />
  //   </a>
  // );
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
