/**
 * 迭代器：
 *      迭代器是一个对象，
 *      它具有一个 next 方法，
 *      该方法会返回一个对象，
 *      包含 value 和 done 两个属性:
 *          value 表示这次迭代的值
 *          done 表示是否已经迭代到序列中的最后一个
 * 但是，要注意区分可迭代对象（Iterable）和迭代器（Iterator）：
 * 可迭代对象：具有Symbol.iterator方法的对象，该方法返回一个迭代器。
 * 迭代器：具有next方法的对象，该方法返回迭代结果对象（{value, done}）。
 * 很多内置类型既是可迭代对象，也是迭代器，因为它们返回的迭代器就是它们自己（例如，数组的迭代器对象）。
 */
// 可迭代协议规定：对象必须实现 Symbol.iterator 方法
const iterable = {
    name: '1',
    value: '2',
    hhh: '3',
   [Symbol.iterator]() {
    const entries = Object.entries(this);
    let index = 0;
    return {
      next: () => {
        if (index < entries.length) {
          return { value: entries[index++][1], done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};
const ite = iterable[Symbol.iterator]().next().value;
console.log('first', ite)
for (const value of iterable) {
  console.log(value); 
}