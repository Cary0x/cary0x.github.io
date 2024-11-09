function openPopout(url, width, height) {
  const left = (window.screen.width - width) / 2; // Center horizontally
  const top = (window.screen.height - height) / 2; // Center vertically

  const popout = window.open(
    url,
    "PopoutWindow",
    `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
  );

  if (popout) {
    popout.focus();
  } else {
    alert("Popout window blocked by browser. Please allow popups.");
  }
}

export default function PopoutLink({ url, width, height, children }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        openPopout(url, width, height);
      }}
      style={{
        color: "#0070f3",
        textDecoration: "underline",
        cursor: "pointer",
      }}
    >
      {children || "Open Popout"}
    </a>
  );
}
