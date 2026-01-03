/**
 * 单例模式，通常指的是确保一个类只有一个实例，并提供一个访问这个实例的全局访问点
 */
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
 
    publicMethod() {
        console.log('这是一个公开的方法');
    }
}

const singleA = new Singleton();
const singleB = new Singleton();
 
console.log(singleA === singleB); // 输出 true，证明是同一个实例
singleB.publicMethod(); // 调用公开方法