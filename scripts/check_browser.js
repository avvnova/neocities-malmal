// please note, 
// that IE11 now returns undefined again for window.chrome
// and new Opera 30 outputs true for window.chrome
// but needs to check if window.opr is not undefined
// and new IE Edge outputs to true now for window.chrome
// and if not iOS Chrome check
// so use the below updated condition
var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isFirefox = winNav.userAgent.indexOf("Firefox") > -1;
var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");
var isGoogleChrome = (typeof winNav.userAgentData !== "undefined") ? winNav.userAgentData.brands[2].brand === "Google Chrome" :  vendorName === "Google Inc.";
var headDoc = document.head.innerHTML;
var faviconSrc ="<link id='favicon' rel='icon' href=";

headDoc += '<meta name="description" content="This is a sample description.">';

if (isIOSChrome) {
   // is Google Chrome on IOS
} else if(
  isChromium !== null &&
  typeof isChromium !== "undefined" &&
  vendorName === "Google Inc." &&
  isOpera === false &&
  isIEedge === false &&
  isGoogleChrome
) {
   // is Google Chrome
    faviconSrc += "'/assets/tinysquid.png' type='image/png'></link>";
    headDoc += faviconSrc;
} else {
    faviconSrc += "'/assets/waveico.gif' type='image/gif'></link>";
    headDoc += faviconSrc;
}

document.head.innerHTML = headDoc;

// This code is sourced from Codepen user Jonathan Marzullo.
// https://codepen.io/jonathan
// Direct Link to code: https://codepen.io/jonathan/pen/RwQXZxJ?editors=1111