/**
 * 相关工具类型
 * Required<T> - 所有属性变为必选
 * Readonly<T> - 所有属性变为只读
 * Pick<T, K> - 从 T 中挑选部分属性
**/
interface User {
  name: string;
  age: number;
  email?: string;
}

// 对比不同工具类型
type PartialUser = Partial<User>;        // 所有属性可选
type RequireUser = Required<User>;      // 所有属性必选
type ReadonlyUser = Readonly<User>;      // 所有属性只读

type OmitUser = Omit<User, 'name'>;     // 去除某些属性
type PickUser = Pick<User, 'name'>;     // 选取某些属性

// 现在可以这样使用
const user1: PartialUser = { name: "Alice", age: 25};
const user2: RequireUser = { age: 25, name: "Alice", email: ''};
const user3: OmitUser = {age: 25, email: ''}; // 
const user4: PickUser = {name: ''}; // 空对象也是有效的