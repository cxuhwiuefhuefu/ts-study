/*
 * @Author: Sunny
 * @Date: 2022-08-18 12:33:27
 * @LastEditors: Suuny
 * @LastEditTime: 2022-08-18 18:29:48
 * @Description: 
 * @FilePath: /ts-study/index.ts
 */

// let str: string = 'TS';
// let muban: string = `web ${str}`;
// console.log(muban);


// let u:void = undefined;
// let n:void = null;

// console.log(u, n);



// function fnVoid():void {
//     return undefined;
// }


// let unknow:any = {
//     a: 123,
//     say: (): number => 123
// }
// console.log(unknow.a, unknow.say)


// let str: unknown = 'hhh';
// let str1: string = 'kkkk';
// str1 = str;



// 第3节课
// interface A {
//     name: string
// }
// interface A {
//     age: number
// }
// let obj:A = {
//     name: 'hhh',
//     age: 18
// }
// console.log(obj);



// interface Person {
//     readonly name: string,
//     age?: boolean,
//     cb(): number,
//     [propName: string]: any
// }

// let p:Person = {
//     name: 'hhh',
//     ccc: 'jj',
//     cb: (): number => {
//         return 123;
//     }
// }

// // p.name = '22'
// console.log(p)



// interface A {
//     name: string
// }
// interface B extends A {
//     age: number
// }
// let p:B = {
//     name: 'hhh',
//     age: 88 
// }
// console.log('p', p)



// 第四章节
// let arr: number[] = [1, 2, 3]; 
// let arr2: string[] = ['hhh']; 
// let arr3: boolean[] = [true, false];

// let arr4: Array<number> = [1, 2, 3]
// let arr5: Array<string> = ['hhh']; 
// let arr6: Array<boolean> = [true, false];

// let arr7: number[][][] = [[[]], [[]]]
// let arr8: Array<Array<number | string>> = [[1, 2, 3, 'e23']] 


// console.log(arr, arr2, arr3, arr4, arr5, arr6, arr7, arr8) 

// function Arr(...args: any): void {
//     console.log(arguments)
//     // let arr:number[] = arguments
//     let arr:IArguments = arguments
//     console.log(arr)
// }
// Arr(2, 3, 4)


//  通过接口去定义数组
// interface ArrNumber {
//     [index:number]: number
// }
// let arr:ArrNumber = [1, 2, 3];
// console.log(arr)




// 第五章节
// const fn = function(name: string, age?: number): string {
//     return name + age;
// }
// let a = fn('章三');
// console.log(a)

// interface User {
//     name: string,
//     age: number
// }
// const fn = function(user: User):  User {
//     return user;
// }
// let a = fn({
//     name: 'hhh',
//     age: 18
// })
// console.log(a);

// 函数重载
// 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
// 如果参数类型不同，则操作函数参数类型应设置为 any。参数数量不同你可以将不同的参数设置为可选



function fn(params: number): void
function fn(params: string, params2: number): void
function fn(params:any, params2?:any): void {
    console.log(params);
    console.log(params2)
} 

let a = fn('1', 2);
