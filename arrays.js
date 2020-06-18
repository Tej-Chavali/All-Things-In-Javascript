// const a=1;
// const b=2;
// if(a==1 || b==2){
//     console.log(true)
// }


// ///------REDUCE-------/////
// var students = [{
//     "userId" : "s1",
//     "branch" : "CSE",   
// },
// {
//     "userId" : "s2",
//     "branch" : "ECE",   
// }];
// var stuObjects = students.reduce(function(acc,student){
//     return {...acc,[student.userId] : student}
// },{});
// console.log(stuObjects.s1);


///-----Comparing Array-----///////
// var obj = {"name":"hello"};
// let obj1 = obj;
// let obj2 = {"name":"hello"};
// let arr1 = ["hey",obj];
// let arr2 = ["guys",obj2];

// let set = new Set([...arr1,...arr2]);
// let result = [...set];
// console.log(set);
// function comparingArray(arr){
//    return arr.map(val => {
//        //console.log('',val);
//         if(typeof val === "object" && val !== null){
//             return JSON.stringify(val);
//         }else{
//             return val;
//         }
//     });
// }
// let result1 = new Set([...comparingArray(arr1), ...comparingArray(arr2)]);
// console.log(result1);

/////------Push,Pop,Unshift,Shift------////
// let arr1 = [1,2,3,4,5];
// arr1.push(6,8);
// console.log('Push',arr1);
// arr1.pop();
// console.log('Pop',arr1);
// arr1.unshift(12,13);
// console.log('unshift',arr1);
// arr1.shift();
// console.log('shift',arr1);


///------position of array----//
// var test = [1,2,3,4,5];
// function position(array,val){
//     return arr.reduce((acc,ele,index,arr) => (ele === val) ? [...acc,index] : [], []);
// }

// function positionFn(array,val){
//     return arr.reduce(function(acc,ele,index,arr) {
//         if (ele === val) {
//             //return [...acc,index];
//             return acc.push(index);
//         } 
//     }, []);
// }

// function test(){
//     return 1> 2 ? 1 : 2>3 ? 3 :4;
// }


/////----Deleting an element from an array--------/////
// let arr = [1,2,3,4,5];
// let result = arr.splice(2,1);
// console.log(result);

// function deleting(n,index){
//     let arr1 = [...n];
//     arr1.splice(index,1);
//     return arr1;
// }
// console.log(deleting(arr,2));

/////----Recursion-----////
// var i = 0;
// function recur(){
//     i++;
//     console.log(i);
//     if(i !== 4){
//         recur();
//     }
//     console.log(i);
//     i--;
// }
// recur();


// let obj ={"a":"Hello","b":"World"};
// for(let val in obj){
//     console.log(val,obj[val]);
// }

///--------Iterating an object trees with arrays------////
// let values = {
//     "name":"hello",
//     "cities":{"place":"paris"},
//     "interests":["badminton","movies","music"]
// }
// function objectTress(obj, orgkey){
//     console.log("======>" + JSON.stringify(obj) + " ---- " +orgkey);
//     for(let val in obj){
//         if(typeof obj[val] === "object"){
//             console.log("------>");
//             objectTress(obj[val],val);
//         }else {
//             if(Array.isArray(obj)) {
//                 console.log("--> Array ---> " + obj + "---->" +orgkey);
//                 console.log(orgkey + val, obj[val]);
//             } else {
//                 console.log(val,obj[val]);
//             }
//         }
//     }
// }
// objectTress(values);

// ///---example--//
// var arr = ["test1", "test2", "test3"];

// for(let a in arr) {
//     //console.log(a , arr[a]);
// }

////----converting object to Array------/////
// let places = {"place":"paris","place2":"Newyork"};
// let result=Object.entries(places);
// console.log(result);
// console.log(Object.fromEntries(result));

// let places1 = [["paris","Newyork"]];
// console.log(Object.fromEntries(places1));


////----Destructuring the array------/////

let object1 = {"name":"stu1",
                "scores1":93,
                "scores2":45,
                "scores3":56
            };
function scores({scores1,scores2,scores3}){
    return scores1+scores2+scores3;
}
console.log(scores(object1));
