class Dep { //监听者
    constructor() {
        this.subs = [];
    }
    add(watcher) {
        this.subs.push(watcher); 
    }
    remove(watcher) {
        let index = this.subs.findIndex(w=>w===watcher);
        index !==-1 && this.subs.splice(index,1);

    }
    notify() {
        this.subs.forEach((w)=>w.update())

    }
}
class Watcher { //观察者 
    constructor(name) {
        this.name = name;
    }
    update() {
        //收到消息 触发更新
    }
}
