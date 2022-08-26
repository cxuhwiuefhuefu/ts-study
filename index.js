"use strict";
/*
 * @Author: Sunny
 * @Date: 2022-08-18 12:33:27
 * @LastEditors: Suuny
 * @LastEditTime: 2022-08-26 11:00:44
 * @Description:
 * @FilePath: /ts-study/index.ts
 */
exports.__esModule = true;
var proxy = function (object, key) {
    return new Proxy(object, {
        get: function (target, prop, receiver) {
            console.log("=====>get", prop);
            return Reflect.get(target, prop, receiver);
        },
        set: function (target, prop, value, receiver) {
            console.log("=====>set", prop);
            return Reflect.set(target, prop, value, receiver);
        }
    });
};
var logAccess = function (object, key) {
    return proxy(object, key);
};
var man = logAccess({
    name: 'hh',
    age: 23,
    text: 'dwdw'
}, 'age');
man.age = 23;
console.log(man);
