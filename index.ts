/*
 * @Author: Sunny
 * @Date: 2022-08-18 12:33:27
 * @LastEditors: Suuny
 * @LastEditTime: 2022-08-24 16:03:51
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



// function fn(params: number): void
// function fn(params: string, params2: number): void
// function fn(params:any, params2?:any): void {
//     console.log(params);
//     console.log(params2)
// } 

// let a = fn('1', 2);







// 第六章节

// let phone:number | string = '23344343'

// let fn = function(type: number | boolean):boolean {
//     console.log(!!type);
//     return !!type
// }
// fn(1)


// 交叉类型
// interface People {
//     name: string,
//     age: number 
// }

// interface Man {
//     sex: string
// }

// const xiaoman = (man: People & Man):void => {
//     console.log(man);
// }
// xiaoman({
//     name: 'hhh',
//     age: 23,
//     sex: 'dd'
// })


// 类型断言
// let fn = function(num: number | string):void {
//     console.log((num as string).length)
// }
// // fn('324343')
// fn(324343)



// interface A {
//     run: string
// }
// interface B {
//     build: string
// }

// let fn = (type: A | B):void => {
//     // console.log((<A>type).run);
//     console.log((type as A).run);
// }
// fn({
//     run: 'hhh'
// })
// fn({
//     build: 'hhh'
// })


// (window as any).abc = 1213


// 类型断言不能滥用
// const fn = (type: any):boolean => {
//     console.log("type as boolean;", type as boolean);
//     return type as boolean;
// }
// fn(1);




// 第七章节 内置对象
// const regexp:RegExp = /\w\d\s/;

// const date:Date = new Date();

// const error:Error = new Error('错误');

// const list:NodeList = document.querySelectorAll('#list li')
// console.log(list)
// const body:HTMLElement = document.body;
// console.log(body)


// ？？？

// function  promise():Promise<number> {
//     return new Promise<number>((resolve) => {
//         resolve(1)
//     })
// }

// promise().then(res => {
//      console.log(res)
// })




// 第八章节 Class 类

// public 内部
// protected 内部和子类中访问

// class Person {
//     public name: string
//     private age: number
//     protected sub: boolean
//     // 静态属性
//     static aaa:string = '123'
//     // 静态方法
//     static run () {
//         // this.s
//         console.log('run')
//         return '789';
//     }
//     static dev () {
//         console.log('dev', this.aaa)
//         this.run();
//         return 'dev'
//     }
//     constructor (name: string, age: number, sub: boolean) {
//         this.name = name;
//         this.age = age;
//         this.sub =  sub
//     }
// }

// class Man extends Person {
//     constructor () {
//         super('hh', 18, true)
//     }
// }

// let p = new Person('hh', 18, true)
// console. log('p', p)
// console.log(Person.aaa)
// Person.dev()


//  通过接口去描述我们的类
// interface Person {
//     run(type: boolean): boolean
// }
// interface H {
//     set(): void
// }

// class A {
//     params: string
//     constructor(params: any) {
//         this.params = params
//     }
// }
// class Man extends A implements Person,H {
//     run(type: boolean): boolean {
//         throw new Error("Method not implemented.")
//     }
//     set () {

//     }
// }
// let man = new Man("hhh");
// console.log('man', man.run(true));




 
// 第九章节 抽象类


// 抽象类
// abstract class A {
//     name: string
//     constructor (name: string) {
//         this.name = name;
//     }
//     setName(name: string) {
//         this.name= name;
//     }
//     abstract getName(): string
// }
 
// // 具体的实现要到派生类去实现
// class B extends A {
//     constructor () {
//         super('hhh')
//     }
//     getName(): string {
//         return this.name
//     }
// }
// let b = new B()
// b.setName('hhh2')
// console.log(b.getName())






// 第十章 元祖类型
// let arr:[string, number] = ['1', 2,]

// arr.push('11')
// console.log(arr)

// // 应用场景
// let excel:[string, string, number][] = [
//     ['title', 'name', 28 ]
// ]






// 第十一章节 枚举


// const fn = (type) => {
//     if(type === 'red') {
//         return 1
//     }
//     if(type === 'green') {
//         return 2
//     }
//     if(type === 'blue') {
//         return 3
//     }
// }

// let obj = {
//     red: 0,
//     green: 1,
//     blue: 2
// }

// enum Color {
//     red = 1,
//     green,
//     blue
// }
// console.log(Color.red)
// console.log(Color.green)
// console.log(Color.blue)


// enum Color {
//     no = 'no',
//     yes = 1
// }
// interface A {
//     red: Color.yes
// }

// let obj: A = {
//     red: Color.yes
// }
// console.log('obj', obj)



// const enum Types {
//     sucess,
//     fail
// }
// let code: number = 0;
// if(code === Types.sucess) {
// }



// enum Types {
//     success = 345
// }
// let success: number = Types.success;
// let key = Types[success]
// console.log(`val---${success}, key------${key}`)






// 12. 类型推论｜类型别名
// let str = '小满';
// str = 234

// let a;

//  类型别名
// type s = string | number;
// let str:s =  '小满'
// console.log(str);


// 函数式类型别名
// type cb = () => string

// const fn: cb = () => 'hh'
// fn()


// zhi
// type T = 'off' | 'on' | false | 5;
// let str:T = 'on'





//  第十三章节 never


// type bbb = string & number

// function error(message:string): never {
//     throw new Error(message);
// }
// error(22)

// function loop():never {
//     while(true) {

//     }
// }


// interface A {
//     type: '保安'
// }
// interface B {
//     type: '草莓'
// }
// interface C {
//     type: '菜菜'
// }
// type All = A | B | C
// function type(val: All) {
//     switch (val.type) {
//         case '保安':
//             break;
//         case '草莓':
//             break
//         case '菜菜':
//             break
//         default:
//             const check:never = val;
//             break;       
//     }
// }





// 第十四章symbol Symbol类型上
// let s:symbol = Symbol('二蛋')
// let num:symbol = Symbol(123);
// let obj= {
//     [num]: "value",
//     [s]: '草莓',
//     name: 'hhhh',
//     sex: 'male' 
// }
// console.log(s, num, obj,  s === num);
// console.log(obj[num], obj[s]);

// for(let key in obj) {
//    console.log('key', key)
// }
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyNames(obj));

// console.log(JSON.stringify(obj))

// console.log(Object.getOwnPropertySymbols(obj))

// console.log(Reflect.ownKeys(obj));





// 第十四章 迭代器｜生成器
// let arr:Array<number> = [4, 5, 6]
// let it:Iterator<number> = arr[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())



// type mapKeys = string | number;
// let arr: Array<number> = [4, 5, 6];
// let set: Set<number> = new Set([1, 2, 3]);

// let map: Map<mapKeys, mapKeys> = new Map();
// map.set('1', '王爷');
// map.set('2', '皇上');

// let obj = {
//     name: 1
// }

// function gen (erg: any) {
//     let it:Iterator<any> = erg[Symbol.iterator]()
//     let next: any = { done: false }
//     while(!next.done) {
//         next = it.next();
//         if(!next.done) {
//             console.log(next);
//         }
//     }
// }
// gen(arr);
// gen(set);
// gen(map);

// 迭代器
// for(let item of arr) {
//     console.log("item", item)
// }




// 泛型 第十六章
// function num(a: number, b: number):Array<number> {
//     return [a, b]
// }
// console.log(num(1, 2))
// function str(a: string, b: string):Array<string> {
//     return [a, b]
// }
// console.log(str('1', '2'))

// 语法为函数名字后面跟一个<参数名>参数名可以随便写 例如我这里写了T 当我们使用这个函数的时候把参数的类型传进去就可以了（也就是动态类型）
// 应用场景：当你定义的时候不明确它的类型 当你使用的时候明确它的类型
// function add<T>(a: T, b: T): Array<T> {
//     console.log([a, b]);
//     return [a, b];
// }
// add< number>(1, 2);
// add< string>('1', '2');
// // 类型推论
// add(1, 2);
// add('1', '2');


//  定义多个类型的泛型
// function  sub<T, U>(a: T, b: U): Array<T | U> {
//     let arr: Array<T | U> = [a, b];
//     console.log(arr);
//     return arr;
// }
// sub<number, boolean>(1, false)
// sub(1, false)


// 泛型约束
// interface Len{
//     length: number
// }
// function getLnegth<T extends Len>(arg: T) {
//     console.log(arg.length)
//     return arg.length;
// }
// getLnegth('23e')






// 第十七 泛型约束｜泛型类
// 其中使用了 TS 泛型和泛型约束  首先定义了 T 类型并使用extends 关键字继承 object 类型的子类型，
//     如何使用 keyof 操作符获取 T 类型的所有键，它的返回类型是联合类型，最后利用 extends 关键字约束，K 类型必须为 keyof T联合类型的子类型

// function say<T, K extends keyof T>(obj:T, key:K) {
//     console.log(obj[key])
//     return obj[key]
// }
// let o = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// say(o, 'a')
// say(o, 'd')


// 泛型类 
// class Sub<T> {
//     attr: T[]= [];
//     add(a: T):T[] {
//         console.log('a', a);
//         this.attr.push(a)
//         return [a];
//     }
// }
// let sub = new Sub<number>();
// sub.attr = [1, 2, 3]
// sub.add(7777)
// console.log(sub)

// let str = new Sub<string>();
// str.attr = ['1', '2', '3']
// str.add('7777')
// console.log(str)




// 第十八章 tsconfig.json 配置
 
// 第十九章 namespance 命名空间

// const a = 1


// namespace A{
//     export const a = 2
// }

// console.log(A.a)


// 嵌套命名空间

// import { B }from './index2'
// namespace A{
//     export namespace C {
//         export const D = 5
//     }
// }

// import AAA = A.C.D;
// console.log(A.C.D, B, AAA)


// 重复命名空间
// namespace A {
//     export const b = 2;
// }
// namespace A {
//     export const d = 4;
// }
// console.log(A);





// 第二十章 三斜线指令

// /// <reference  path="index2.ts" />

// namespace A {
//     export const c = 666;
// }
// // console.log("hhh.aaa", hhh.aaa)

// / <reference  types="node" />





// 第二十一章节  声明文件
// import express from 'express'
 





// 第二十二 Mixins混入

// 对象的混入

// interface Name {
//     name: string
// }
// interface Age {
//     age: number
// }
// interface Sex {
//     sex: number
// }
// let a:Name = {name: 'hhh'}
// let b:Age = {age: 22}
// let c:Sex = {sex: 2}
// let obj = Object.assign(a, b, c);
// console.log(obj)



// 类的混入

// class A {
//     type: boolean 
//     changeType() {
//         this.type = !this.type
//     }
// }

// class B {
//     name: string
//     getName ():string {
//         return this.name
//     }
// }

// class C implements A, B {
//     type: boolean = false;
//     name: string  = 'hhh';
//     changeType: () => boolean;
//     getName: () => string;
// }


// function mixins(curClas: any, itemCls: any[]) {
//     itemCls.forEach(item => {
//         Object.getOwnPropertyNames(item.prototype).forEach(name => {
//             curClas.prototype[name] = item.prototype[name]
//         })
//     })
// }
// mixins(C, [A, B]);


// let c = new C();
// console.log(c.type);
// c.changeType();
// console.log(c.type);





// 第二十三 装饰器 

// const watcher:ClassDecorator = (target: Function) => {
//     console.log(target);
//     target.prototype.getName = <T>(name: T):T => {
//         return name;
//     }
// }
// @watcher
// class A {

// }
// @watcher
// class B {

// }
// let a = new A()
// console.log((<any>a).getName('323232'));
// let b = new A()
// console.log((<any>b).getName('323232'));


// 高阶段函数去传递参数
// const watcher = (name: string):ClassDecorator => {
//     return (target: Function) => {
//         target.prototype.getName = () => {
//             return name;
//         }
//     }
// }
// @watcher('hhhh')
// class A {

// }
// let a = new A()
// console.log((<any>a).getName());


// 组合式装饰器
// const watcher = (name: string):ClassDecorator => {
//     return (target: Function) => {
//         target.prototype.getName = () => {
//             return name;
//         }
//     }
// }
// const log:ClassDecorator = (target: Function) => {
//     target.prototype.a = 312;
// }
// @log
// @watcher('hhhh')
// class A {

// }
// let a = new A()
// console.log((<any>a).getName());
// ???? 未完待续




 
//  第二十四章节  Rollup 构建 TS 项目


