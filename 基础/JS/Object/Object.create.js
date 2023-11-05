

Object.myCreate = function (proto,proObj) {
    if (proObj === null) {
      // 这里没有判断proObj是否是原始包装对象
      throw 'TypeError'
    } else {
      function F() {}
      F.prototype = proto
      const obj = new F()
      if (proObj !== undefined) {
        Object.defineProperties(obj, proObj)
      }
      if (proto === null) {
        // 创建一个没有原型对象的对象，Object.create(null)
        obj.__proto__ = null
      }
      return obj
    }
  }


  