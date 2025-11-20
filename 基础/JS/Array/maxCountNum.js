let arr = [1,1,1,2,3,4,5,7,7,1,9,3,2,6,7,9,4,0];

const maxCountNum = (arr) => {
    const map = new Map(), len = arr.length;

    for (let i = 0; i < len; i++) {
        map.set(arr[i], map.has(arr[i]) ? map.get(arr[i]) + 1: 1);
        if (map.get(arr[i]) > Math.floor(len / 2)) return arr[i];
    }

    return -1;
}
