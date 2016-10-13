ar dat = require("fft-js");

var datGUI;

AFRAME.registerComponent('yes-no-question', {
   schema: {
     name: { type: 'string' }, // for some reason, missing out name messes the order
     open: { default: true, type: 'boolean' }
   },
   init: function () {
   }
});

AFRAME.registerPrimitive('yes-no-question',{
 defaultComponents: {
     "selection-folder": {}
   },
 mappings: {
   name:  'selection-folder.name',
   value: 'selection-folder.value'
 }
});


