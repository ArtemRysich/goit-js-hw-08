 function add(a) {
   const b = _createValue()
   return a + b
 }



 function _createValue() {
   return Math.random();
 }
 const a = 15;
 const b = 100;


 export {
   add,
   a,
   b
 }