function findContinuousSequences(value) {
     const result = [];    
    // 至少需要两个数，所以最大起始值不超过 value/2
    for (let start = 1; start <= Math.ceil(value / 2); start++) {
        let sum = 0;
        const sequence = [];
        
        // 从 start 开始累加
        for (let current = start; sum < value; current++) {
            sum += current;
            sequence.push(current);
            
            // 当和等于目标值时，将序列添加到结果中
            if (sum === value && sequence.length > 1) {
                result.push([...sequence]); // 使用扩展运算符创建副本
                break;
            }
            
            // 如果和已经超过目标值，跳出循环
            if (sum > value) break;
            
        }
    }
    
    return result;
}

// 找出所有和为 15 的连续正整数序列
const sequences = findContinuousSequences(15);
console.log(sequences);
// 输出: [[1, 2, 3, 4, 5], [4, 5, 6], [7, 8]]