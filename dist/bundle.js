!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.myJsLib=t():e.myJsLib=t()}(this,(()=>{return e={44:e=>{e.exports={add:function(e,t){return e+t},subtract:function(e,t){return e-t},multiply:function(e,t){return e*t},divide:function(e,t){if(0===t)throw new Error("Cannot divide by zero");return e/t},createUser:function(e,t){return fetch("https://63772c9a5c477765121615ba.mockapi.io/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t})}).then((e=>e.json())).then((e=>(console.log("Success:",e),e))).catch((e=>{throw console.error("Error:",e),e}))}}}},t={},function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}(44);var e,t}));