
import $ from 'jquery'

import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import login from './com/login.vue'

$(function(){ 
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#'+'#000'
    })
})
//calss 关键字是ES6中的新语法 用来实现ES6中的面向对象编程方式
class Person{
    //使用static关键字，可以使用静态属性
    static info = {name: 'zs',age: 20}
}

var p1 = new Person();
console.log(Person.info)


var vm = new Vue({
    el: '#test',
    data: {
        message: '<h1>ceshi</h1>'
    },
    render: c=>c(login),
})