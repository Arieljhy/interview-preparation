/**
 * 堆排序
 * 算法思想：将待排序数组视为 二叉堆 ， 经过调整使数组满足 大根堆 或者 小根堆
 */
let arr = [2, 3, 1, 109, 10, 9, 7, 9, 2, 34, 65, 7, 8, 9];
const heapSort = (array) => {
    const length = array.length
	for (let i = Math.floor(length / 2) - 1; i >= 0; i--) heapify(array, i, length)
	for (let i = length - 1; i > 0; i--) {
		[array[0], array[i]] = [array[i], array[0]]
		heapify(array, 0, i)
	}
	return array
}
const heapify = (array, cur, end) => {
    let max = cur;
    let left = cur * 2 + 1, right = cur * 2 + 2;
	if (left < end && array[left] > array[max]) max = left
	if (right < end && array[right] > array[max]) max = right
	if (max !== cur) {
		[array[max], array[cur]] = [array[cur], array[max]]
		heapify(array, max, end)
	}
}
console.log(heapSort(arr))
