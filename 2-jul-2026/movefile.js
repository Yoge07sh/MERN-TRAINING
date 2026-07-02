const math = require('./math')
console.log(math);
let result = math.add(2, 3)
console.log(result);
result = math.subtract(3, 2)
console.log(result)
const area = require('./area')
let ans = area.area_Circle(3);
console.log(ans);
ans = area.area_rectangle(2, 3);
console.log(ans);
ans = area.area_rightTriangle(3, 4);
console.log(ans);
const volume = require('./volumes/volume')
let vl = volume.volume_cube(3);
console.log(vl);
vl = volume.volume_cone(2, 3);
console.log(vl);