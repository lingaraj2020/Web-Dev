// function sum(a,b){
//     let totalsum=a+b;
//     return totalsum;
// }

// console.log("linga"+"raj");

// function canVote(age){
//     if(age>18) return true;
//     else return false;
// }

// let ans=canVote("lingaraj");
// console.log(ans);

// function evenodd(num){
//     if(num%2==0) return "The number is Even";
//     else return "The number is odd";
// }

// console.log(evenodd(15));
// let users=[{
//     name:"raj",
//     age:24,
//     gender:"male"
// },
// {
//     name:"priya",
//     age:12,
//     gender:"female"
// },
// {
//     name:"santhosh",
//     age:18,
//     gender:"male"
// }]

// function solve(arr){
//     let arr1=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].age>=18 && arr[i].gender==="male"){
//             arr1.push(arr[i]);
//         }
//     }
//     return arr1;
// }
// let ans=solve(users);
// console.log(ans);


// let users=[1,3,5,6,8,9,200];
// function evennum(users){
//     let arr1=[];
//     for(let i=0;i<users.length;i++){
//         if(users[i]%2==0){
//             arr1.push(users[i]);
//         }
//     }
//     return arr1;
// }
// let ans=evennum(users);
// console.log(ans);

let users=[{
    name:"lingaraj",
    age:22
},{
    name:"king",
    age:"43",
    address:"Bangalore"
}]
const user1=users[1]["address"];
console.log(user1);