class EventEmitter {
    private events: Map<string, Set<Function>>;
    constructor () {
        this.events = new Map();
    }

    on (eventName: string, callback: Function) {
        if(!this.events.has(eventName)) {
            this.events.set(eventName, new Set());
        }
        this.events.get(eventName)!.add(callback);
    }

    emit (eventName: string, ...args: any[]) {
        if (!this.events.has(eventName)) return;
        this.events.get(eventName)!.forEach(callback => callback(...args));
    }

    off (eventName: string, callback?: Function) {
        if (!this.events.has(eventName)) return;
        callback && this.events.get(eventName)!.delete(callback);
        this.events.delete(eventName);
    } 
    
    once (eventName: string, callback: Function) {
        const wrapper = (...args: any[]) => {
            callback(...args);
            this.off(eventName, wrapper);
        }
        this.on(eventName, wrapper);
    }
}