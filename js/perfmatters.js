// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
function logCRP(){var c=window.performance.timing,d=c.domContentLoadedEventStart-c.domLoading,a=c.domComplete-c.domLoading;var b=document.getElementById("crp-stats");b.textContent="DCL: "+d+"ms, onload: "+a+"ms"}window.addEventListener("load",function(a){logCRP()});
