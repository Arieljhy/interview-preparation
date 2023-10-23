/**
 *  解决 跨域问题
 */
// index.html

//利用 <script> 标签没有跨域限制的漏洞
//缺点是仅支持get方法具有局限性,不安全可能会遭受XSS攻击。
function jsonp({ url, params, callback }) {
    return new Promise((resolve, reject) => {
      let script = document.createElement('script')
      window[callback] = function(data) {
        resolve(data)
        document.body.removeChild(script)
      }
      params = { ...params, callback } // wd=b&callback=show
      let arrs = []
      for (let key in params) {
        arrs.push(`${key}=${params[key]}`)
      }
      script.src = `${url}?${arrs.join('&')}`
      document.body.appendChild(script)
    })
  }
  // 需要和 后端约定 callback 的名称
  jsonp({
    url: 'http://localhost:3000/say',
    params: { wd: 'Iloveyou' },
    callback: 'show'
  }).then(data => {
    console.log(data)
  })

  