// function sum(a,b){
//     return a+b;
// }

// let ans=sum("20",5);
// console.log(ans);

// function sumn(n){
//     return n*(n+1)/2;
// }

// let result=sumn(12);
// console.log(result);

// const fs = require("fs");
// function cb(){
//     const contents = fs.readFileSync("a.txt", "utf-8");
//     console.log(contents);
// }

// // setTimeout(cb,3000);
// let contents=fs.readFileSync("a.txt","utf-8",setTimeout(cb,3000));
// console.log(contents);
// let contents2=fs.readFileSync("b.txt","utf-8");
// console.log(contents2);

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("b.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// console.log("first one done!");

// fs.readFile("a.txt", "utf-8", function (err, contentsA) {
//   console.log(contentsA);
//   fs.readFile("b.txt", "utf-8", function (err, contentsB) {
//     console.log(contentsB);
//     fs.readFile("a.txt", "utf-8", function (err, contentsA2) {
//       console.log(contentsA2);
//     });
//   });
// });

// const fs=require("fs");
// fs.readFile("a.txt","utf-8",function(err,content){
//     console.log(content);
// })

// const fs=require("fs");

// function print(err,data){
//     console.log(data);
// }
// fs.readFile("a.txt","utf-8",print);
// fs.readFile("b.txt","utf-8",print);
// console.log("Done!");

// //promisified version of setTimeout
// function settimeoutPromise(delay) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

// settimeoutPromise(2000).then(() => {
//   console.log("hi there!");
// });

// //promisified version of readfile
// const fs = require("fs");
// function readFilePromise(filename) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, "utf-8", (err, data) => {
//       if (err) {
//         console.log(err);
//       }
//       if (data) {
//         console.log(data);
//       }
//     });
//   });
// }

// readFilePromise("b.txt")
//     .then(function (yourdata) {
//     console.log(yourdata);
//     })
//     .catch(function(err){
//         console.log(err);
//     })


    //promisified version of fetch
    function fetchPromise(url){
        return new Promise((resolve,reject)=>{
            fetch(url).then((response)=>{
                return response.json();
            })
            .then((data)=>{
                console.log(data);
            })
            .catch((err)=>{
                console.log(err);
            })
        })
    }

    async function fetchdata(){
        await fetchPromise("https://api.github.com/users/lingaraj2020");
    }
    fetchdata();