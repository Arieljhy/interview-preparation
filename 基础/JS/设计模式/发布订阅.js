class EventEmitter1 {
    constructor () {
        this.events = new Map();
    }

    on (eventName, callback) {
        if(!this.events.has(eventName)) {
            this.events.set(eventName, new Set());
        }
        this.events.get(eventName).add(callback);
    }

    emit (eventName, ...args) {
        if (!this.events.has(eventName)) return;
        this.events.get(eventName).forEach(callback => callback(...args));
    }

    off (eventName, callback) {
        if (!this.events.has(eventName)) return;
        callback ?
            this.events.get(eventName).delete(callback) : this.events.delete(eventName);
        
    } 
    
    once (eventName, callback) {
        const wrapper = (...args) => {
            callback(...args);
            this.off(eventName, wrapper);
        }
        this.on(eventName, wrapper);
    }
}