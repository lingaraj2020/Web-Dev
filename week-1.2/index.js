// class rectangle{
//     constructor(width,height,color){
//       this.width=width;
//       this.height=height;
//       this.color=color;
//     }
//     area(){
//       const ans=this.width*this.height;
//       return ans;
//     }
//     paint(){
//       console.log(`this rectangle is in ${this.color}`);
//     }
// }
 
// const rect=new rectangle(2,6,"red");
// const area=rect.area();
// console.log(area);
 
// --------------------------------------------------------------------------
// class shape{
//   constructor(color){
//     this.color=color;
//   }
//   paint(){
//     console.log(`painting the shape with ${this.color}`)
//   }
// }

// class circle extends shape{
//   constructor(radius,color){
//     super(color);
//     this.radius=radius;
//   }
//   area(){
//     return this.radius*this.radius*Math.PI;
//   }
//   getDescription(){
//     return `A circle with ${this.radius} having ${this.color} `;
//   }
// }

// const circ=new circle(5,"red");
// console.log(circ.area());
//-----------------------------------------------------------
// const now=new Date();
// console.log(now.toISOString());
// console.log(now.getMonth());



// const now=new Date();
// console.log(now.getFullYear());

// const map = new Map();
// map.set('name', 'lingaraj');
// map.set('age', 30);
// console.log(map.get('name'));
//----------------------------------------------------------------

//promises 
// function setTimeoutpromisified(ms){
//   return new Promise((resolve)=>{setTimeout(resolve,ms)})
// }
// function cb(){
//   console.log("promise resolved");
// }
// // setTimeoutpromisified(3000).then(cb);

// function cb1(){
//   console.log("hi");
// }
// function cb2(){
//   console.log("hello");
// }
// function cb3(){
//   console.log("hello there");
// }
// setTimeout(cb1,1000);
// setTimeout(cb2,3000);
// setTimeout(cb3,5000);

// setTimeoutpromisified(1000).then(function(){
//     console.log("hi");
// })
// setTimeoutpromisified(3000).then(function(){
//   console.log("hello");
// })
// setTimeoutpromisified(5000).then(function(){
//   console.log("hello there")
// })

// async function solve(){
//   await setTimeout(function cb1(){
//     console.log("hi");
//   },1000);
//   await setTimeout(function cb2(){
//     console.log("hello");
//   },3000);
//   await setTimeout(function cb3(){
//     console.log("hi there");
//   },5000);
// }
// solve();
//-----------------------------------------------------------------------

// const fs=require("fs");
// function cleanFile(filepath,cb){
//   fs.readFile(filepath,"utf-8",function(err,data){
//     data=data.trim();
//     fs.writeFile(filepath,data,function(){
//       cb();
//     })
//   })
// }

// function callback(){
//   console.log("hello there!");
// }
// cleanFile("a.txt",callback);

// const fs=require("fs")
// function cleanfile(filepath){
//   return new Promise((resolve)=>{
//     fs.readFile(filepath,"utf-8",function(err,data){
//       data=data.trim();
//       fs.writeFile(filepath,data,function(){
//         resolve();
//       })
//     })
//   })
// }

// async function main(){
//   await cleanfile("a.txt");
//   console.log("done");
// }
// main();
//---------------------------------------------------------------
// function onDone(){
//     console.log("file cleaned");
// }

// cleanFile("a.txt",onDone);


// const promise = new Promise((resolve, reject) => {
//     console.log("Start of executor");
//     resolve("Promise resolved");
//     console.log("After resolve");
//   });
  
//   promise.then((result) => {
//     console.log(result);
//   });
  
//   console.log("End of script");


// function fetchpromisified(url){
//   return new Promise((resolve,reject)=>{
//     fetch(url).then(response=>{
//       if(!response.ok){
//         throw new Error("http failed");    
//       }
//       return response.json();
//     })
//     .then(data=>resolve(data))
//     .catch(error=>reject(error));
//   })
// }
// fetch("https://projects.100xdevs.com/tracks/promises-async-await/Promises-and-async--await-10").then(data=>console.log(data)).then(err=>console.log(err));


const fs=require("fs");
function readfilePromisified(filepath){
  return new Promise((resolve,reject)=>{
    fs.readFile(filepath,"utf-8",function(err,data){
      if(err){
        return reject(err);
      }
      resolve(data);
    })
  })
}

readfilePromisified("a.txt").then(data=>console.log(data)).catch(err=>console.log(err));