var ow_key = document.getElementById("ow_key").value;
console.log(ow_key);
window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
window.myWidgetParam.push({id: 11,cityid: '1673820',appid: ow_key,units: 'metric',containerid: 'openweathermap-widget-11',  });
(function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";
script.src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);
  })();