let area_Circle = (r)=>{
    let c = 3.14*r*r;
    return c;
}
let area_rectangle = (l,b)=>{
    let c = l*b;
    return c;
}
let area_rightTriangle = (b,h) =>{
    let c =.5*b*h;
    return c;
}
module.exports = {
    area_Circle,
    area_rectangle,
    area_rightTriangle
}