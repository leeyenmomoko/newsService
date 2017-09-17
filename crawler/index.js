const request = require('request');

console.log('hello world');




// const url = `http://api.news.ebc.net.tw/api/get_news/5/merge`;
// const details = `http://api.news.ebc.net.tw/api/get_news_data/78721`
// getNewsDetails(details).then(() => {

// }).catch(err => {

// });

// function getRemoteTwoDays(url) {
//     return new Promise((resolve, reject) => {
//         request({ url }, (error, response, body) => {
//             if (!error && response.statusCode == 200) {
//                 const obj = JSON.parse(body);
//                 console.log(obj.status);
//                 obj.rows.map(news => {
//                     // console.log(news);

//                 });
//                 // console.log(obj.rows.length);
//                 resolve();
//             } else {
//                 console.log(error);
//                 reject();
//             }
//         });
//     });
// }

// function getNewsDetails(url) {
//     return new Promise((resolve, reject) => {
//         request({ url }, (error, response, body) => {
//             if (!error && response.statusCode == 200) {
//                 const obj = JSON.parse(body);
//                 console.log(obj);
//                 resolve();
//             } else {
//                 console.log(error);
//                 reject();
//             }
//         });
//     });
// }