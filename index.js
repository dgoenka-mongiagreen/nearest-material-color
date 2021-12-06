const mdColors = require("./material-design-colors");
const nearestColor = require('nearest-color').from(mdColors);

console.log(JSON.stringify(nearestColor('#ff00a6')));
console.log(JSON.stringify(nearestColor('#00adff')));