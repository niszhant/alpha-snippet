// const buf = new Buffer('Hello', 'utf8');
// console.log(buf);
// console.log(buf.toString());
// console.log(buf.toJSON());

const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
view[0] = 9;
view[1] = 12;
console.log(view);