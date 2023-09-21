/* 
! to fix move the clousred variables to inside function 
! that logs so that it's updated every time the function is called 
*/

// let outerNumber = 0;

// function counter() {
//   let innerNumber = 0;

//   function inc() {
//     outerNumber = outerNumber + 1;
//     innerNumber = innerNumber + 1;
//   }

//   function log() {
//     const message = `Outer number is ${outerNumber} and Inner number is ${innerNumber}`;
//     const outerNumberCopy = outerNumber;
//     const innderNumberCopy = innerNumber;

//     console.log({ outerNumber });
//     console.log({ innerNumber });
//     console.log({ outerNumberCopy });
//     console.log({ innderNumberCopy });

//     console.log(message);
//   }

//   return [inc, log];
// }

// /*
// on Counter Call

// outerNumber = 0
// innerNumber = 0

// message
// outerNumberCopy
// innderNumberCopy
// */
// const [increment, log] = counter();

// /* first Increment
//   outerNumber = 1
//   innerNumber = 1

//   message
//   outerNumberCopy
//   innderNumberCopy
// */
// increment();

// /* second Increment
//   outerNumber = 2
//   innerNumber = 2

//   message
//   outerNumberCopy
//   innderNumberCopy
// */
// increment();

// /* log
//   outerNumber = 2
//   innerNumber = 2

//   message = 2 , 2
//   outerNumberCopy = 2
//   innderNumberCopy = 2
// */

// log();

// /*
// on Second Counter Call

// outerNumber = 2
// innerNumber = 0

// message
// outerNumberCopy
// innderNumberCopy
// */
// const [increment2, log2] = counter();

// /* first Increment2 it's the same as increment one
//   outerNumber = 3
//   innerNumber = 1

//   message
//   outerNumberCopy
//   innderNumberCopy
// */
// increment2();

// /* second Increment2 call it's the same as increment one
//   outerNumber = 4
//   innerNumber = 2

//   message
//   outerNumberCopy
//   innderNumberCopy
// */
// increment2();

// /* second Increment2 call it's the same as increment one
//   outerNumber = 4
//   innerNumber = 2

//   message = 4 , 2
//   outerNumberCopy = 4
//   innderNumberCopy = 2
// */
// log2();
