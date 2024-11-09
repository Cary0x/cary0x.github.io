import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

function initLightbox() {
  const images = document.querySelectorAll("article img");
  if (images.length === 0) {
    setTimeout(initLightbox, 1000);
    return;
  }

  const lightboxOverlay = document.createElement("div");
  lightboxOverlay.classList.add("lightbox-overlay");
  document.body.appendChild(lightboxOverlay);

  const lightboxImage = document.createElement("img");
  lightboxImage.classList.add("lightbox-image");
  lightboxOverlay.appendChild(lightboxImage);

  const closeLightboxOnEscape = (e) => {
    if (e.key === "Escape") {
      lightboxOverlay.classList.remove("active");
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeLightboxOnEscape);
    }
  };

  images.forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImage.src = img.getAttribute("src");
      lightboxOverlay.classList.add("active");
      document.body.style.overflow = "hidden";

      window.addEventListener("keydown", closeLightboxOnEscape);
    });
  });

  lightboxOverlay.addEventListener("click", () => {
    lightboxOverlay.classList.remove("active");
    document.body.style.overflow = "";
    window.removeEventListener("keydown", closeLightboxOnEscape);
  });
}

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;
  initLightbox();
}

if (ExecutionEnvironment.canUseDOM) {
  // We also need to setCodeRevealTriggers when the page first loads; otherwise,
  // after reloading the page, these triggers will not be set until the user
  // navigates somewhere.
  window.addEventListener("load", () => {
    setTimeout(initLightbox, 1000);
  });
}
