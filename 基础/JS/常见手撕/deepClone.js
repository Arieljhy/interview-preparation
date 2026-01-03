const getType = (target) => Object.prototype.toString.call(target).slice(8, -1);
const getType1 = (target) => Object.prototype.toString.call(target).slice(8, -1);

const deepClone1 = (target, map = new WeakMap()) => {
    if (map.has(target)) return target;
    
    const type = getType1(target);
    let cloneTarget;

    switch(type) {
        case 'Object':
            cloneTarget = {};
            break;
        case 'Array':
            cloneTarget = [];
            break;
        case 'Map':
            cloneTarget = new Map();
            break;
        case 'Set':
            cloneTarget = new Set();
            break;
        case 'Date':
            return new Date(target);
        case 'RegExp':
            return new RegExp(target);  
        default:
            return target;
    }

    map.set(target, cloneTarget);

    if (type === 'Map') {
        target.forEach((value, key) => {
            cloneTarget.set(deepClone1(key, map), deepClone1(value, map));
        })
    }
    else if (type === 'Set') {
        target.forEach(value => {
            cloneTarget.add(deepClone1(value, map));
        })
    }
    else {
        for (let key in target) {
            if (Object.prototype.hasOwnProperty.call(target, key)) {
                cloneTarget[key] = deepClone1(target[key], map);
            }
        }
    }
    return cloneTarget;
}


const deepClone = (target, map = new WeakMap()) => {
    if (map.has(target)) return target;

    let cloneTarget;
    const type = getType(target);

    switch(type) {
        case 'Object':
            cloneTarget = {};
            break;
        case 'Array':
            cloneTarget = [];
            break;
        case 'Map':
            cloneTarget = new Map();
            break;
        case 'WeakMap':
            cloneTarget = new WeakMap();
            break;   
        case 'Set':
            cloneTarget = new Set();
            break; 
        case 'WeakSet':
            cloneTarget = new WeakSet();
            break;
        case 'Date':
            return new Date(target);
        case 'RegExp':
            return new RegExp(target);                          
        default:
            return target;
    }

    map.set(target, cloneTarget);

    if (type === 'Map') {
        target.forEach((value, key) => {
            cloneTarget.set(deepClone(key, map), deepClone(value, map));
        })
    }
    else if (type === 'Set') {
        target.forEach((value) => {
            cloneTarget.add(deepClone(value, map));
        })
    }
    else {
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                cloneTarget[key] = deepClone(target[key], map);
            }
        }
    }

    return cloneTarget;
}