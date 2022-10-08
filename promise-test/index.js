// 文件操作模块
const fs = require('fs');
// 文件路径
const path = require('path');
/**
 * 读取文件
 */
// const readFileContent = (fileName, callback) => {
//   const filePath = path.resolve(__dirname, 'files', fileName);
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     callback(
//       JSON.parse(data.toString())
//     )
//   });
// };

// readFileContent('a.json', (data) => {
//   console.log('a.json', data.content);
//   readFileContent(data.next, (data) => {
//     console.log('b.json', data.content);
//     readFileContent(data.next, (data) => {
//       console.log('c.json', data.content);
//     })
//   })
// })

// const readFileContent = (fileName, callback) => {
//   const promise = new Promise((resolve, reject) => {
//     const filePath = path.resolve(__dirname, 'files', fileName);
//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(
//         JSON.parse(data.toString())
//       )
//     });
//   })

//   return promise;
// };

// readFileContent('a.json').then((data) => {
//   console.log(data.content);
//   return readFileContent(data.next);
// }).then((data) => {
//   console.log(data.content);
//   return readFileContent(data.next);
// }).then((data) => {
//   console.log(data.content);
// });

// const readFileContent = (fileName, callback) => {
//   const promise = new Promise((resolve, reject) => {
//     const filePath = path.resolve(__dirname, 'files', fileName);
//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(
//         JSON.parse(data.toString())
//       )
//     });
//   })
//   return promise;
// };
// console.log('promise', await readFileContent('a.json'))
// const adata = await readFileContent('a.json');
// console.log(adata.content);
// const bdata = await readFileContent(adata.next);
// console.log(bdata.content);
// const cdata = await readFileContent(bdata.next);
// console.log(cdata.content);