if (window !== window.top) {
  document.getElementById("__docusaurus").remove();
}
// var spotifyPlayer = document.querySelector(
//   'iframe[src^="https://open.spotify.com"]'
// );
// spotifyPlayer.contentWindow.postMessage(
//   {
//     type: "listeningOn",
//     domain: window.location.hostname,
//     gtmId: "GTM-KHFX55XS",
//   },
//   "https://open.spotify.com"
// );
if (window.chrome && window.chrome.runtime && chrome.runtime.sendMessage) {
  chrome.runtime.sendMessage = undefined;
  window.close();
}
