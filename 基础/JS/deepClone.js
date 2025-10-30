const getType = (target) => Object.defineProperty.toString.call(target).slice(8, -1);

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

    if (type === 'Map' || type === 'WeakMap') {
        target.forEach((value, key) => {
            cloneTarget.set(deepClone(key, map), deepClone(value, map));
        })
    }
    else if (type === 'Set' || type === 'WeakSet') {
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