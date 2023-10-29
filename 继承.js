/**
 *  原型链式继承  
 *     - 所有子类的实例共享父类属性
 */
 function  Parent(){
    this.name = 'parent';
 }
 Parent.prototype.sayHello = function(){
    console.log("I am ",this.name)
 }
 function Child(){
    this.name = 'child';
 }
 Child.prototype = new Parent()
 /**
  *  构造函数继承 
  *     - 避免原型链继承中的共享属性问题
  *     - 但父类的方法不会被继承到子类的原型中。
  */
 function  Parent(){
    this.name = 'parent';
 }
 function Child(){
    Parent.call(this);
    this.name = 'child';
 }
 /**
  * 组合式继承
  *     - 会调用两次父类构造函数，可能会导致性能问题
  */
 function  Parent(){
    this.name = 'parent';
 }
 Parent.prototype.say = function(){
    console.log("say name:",this.name)
 }
 function Child(){
    Parent.call(this);
    this.name = 'child';
 }
 Child.prototype = new Parent()
 /**
  * 原型式继承
  *     修改子对象的属性也会影响到模板对象。
  */
 const parent = {
    name:"parent",
    say:function(){console.log(this.name)}
 }
 const child = Object.create(parent)
 child.name = 'child';
 child.say()
 /**
  * 寄生式继承
  *     这种方式类似于原型式继承，
  *     但在创建新对象时可以添加额外的属性和方法，
  *     这些额外的属性和方法可以根据需要进行定制。
  */
 function createChild(parent){
    const child = Object.create(parent);
    child.name = 'child1111';
    child.sayHello = function(){
        console.log(this.name)
    }
    return child;
 }
 const parent1 = {
    name:"parent",
    say:function(){console.log(this.name)}
 }
 const  c = createChild(parent1)
 c.sayHello();
 /**
  * 寄生组合式继承
  *  
  * */ 

/**
 * ES6 类继承
 */
class myParent{
    constructor(){
        this.name = 'p'
    }
    say(){
        console.log("name:",this.name)
    }
}
class myChild extends myParent{
    constructor(){
        super();
        this.name = 'child';
    }
}
let cc = new myChild()
cc.say()