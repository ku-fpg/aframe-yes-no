var fft = require("fft-js");

AFRAME.registerComponent('yes-no-controls', {
   schema: {
   },
   init: function () {
		 console.log("init");
   },
	 tick: function () {
		 console.log("tick");
	 }
});
