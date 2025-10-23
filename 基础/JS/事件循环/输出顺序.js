// code 1
new Promise((resolve, reject) => {
    reject('error')
  })
  
  .then(()=> {
    console.log('ok 1')
  }, (err) => {
    console.log('error 1: ' +  err)
  })
  
  .then(
    () => {
    console.log('ok 2')
  }, (err) => {
    console.log('error 2: ' + err)
  }
  )
  
  .catch(err => {
    console.log('catch 1: ' + err)
  })