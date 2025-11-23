/**
 * 事件总线 
 * EventBus
 * 发布订阅模式
 */
class EventEmitter {
    private events: Map<String, Set<Function>>;
    constructor () {
        this.events = new Map();
    }

    on (eventName: String, callback: Function) {
        if(!this.events.has(eventName)) {
            this.events.set(eventName, new Set());
        }
        this.events.get(eventName)!.add(callback);
    }

    emit (eventName: String, ...args: any[]) {
        if (!this.events.has(eventName)) return;
        this.events.get(eventName)!.forEach(callback => callback(...args));
    }

    off (eventName: String, callback?: Function) {
        if (!this.events.has(eventName)) return;
        callback && this.events.get(eventName)!.delete(callback);
        this.events.delete(eventName);
    } 
    
    once (eventName: String, callback: Function) {
        const wrapper = (...args: any[]) => {
            callback(...args);
            this.off(eventName, wrapper);
        }
        this.on(eventName, wrapper);
    }
}
  