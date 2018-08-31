// export function test() {
//     // console.log(this);
//     let id = 100;
//     let obj;
//     return obj = {
//         id: 200,
//         show: () => {
//             return {
//                 show_child: () => {
//                     // console.log(this.id);
//                 }
//             }
//         },
//         show2() {
//             console.log(this.id);
//         }
//     };
// }
// test().show().show_child();
// export const temp = 4;
// export const obj = { name: 'Ti', age: 23 };

function test() {
  // console.log(this);
  let id = 100;
  let obj;
  return obj = {
    id: 200,
    show: () => {
      return {
        show_child: () => {
          // console.log(this.id);
        }
      }
    },
    show2() {
      console.log(this.id);
    }
  };
}
test().show().show_child();
const obj = { name: 'Ti', age: 23 };

//named export
export const temp = 4;

export { test, obj };

export default 'default value'; // maximum 1 export default allowed
