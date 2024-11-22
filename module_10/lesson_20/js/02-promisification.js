/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */


// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();

//   setTimeout(() => {
//     if(random > 0.5) {
//       onSuccess(`Ваше замовлення ${dish}`);
//     } else {
//       onError("Закінчилися продукти");
//     }
//   }, 1000)
// }

// makeOrder(
//   "Пиріжок",
//   (str) => {
//     console.log("success", str)
//   },
//   (str) => {
//     console.log("error", str)
//   }
// )




// const makeOrder = (dish) => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//       if(random > 0.5) {
//         resolve(`Ваше замовлення ${dish}`);
//       } else {
//         reject("Закінчилися продукти");
//       }
//     }, 1000)
//   })
// }


// makeOrder("Пиріжок")
//   .then((lalala) => console.log(lalala))
//   .catch(tototo => console.log(tototo))




  
/*
  * Промісифікація «синхронних» функцій
  * - Promise.resolve()
  * - Promise.reject()
  */


// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();

//   if(random > 0.5) {
//     onSuccess(`Ваше замовлення ${dish}`);
//     return;
//   }

//   onError("Закінчилися продукти");
// }

// makeOrder(
//   "Пиріжок",
//   (str) => {
//     console.log("success", str)
//   },
//   (str) => {
//     console.log("error", str)
//   }
// )


// const makeOrder = (dish) => {
//   const random = Math.random();

//   if(random > 0.5) {
//     return Promise.resolve(`Ваше замовлення ${dish}`);
//   } else {
//     return Promise.reject("Закінчилися продукти");
//   }
// }

// makeOrder("Пиріжок")
//   .then(data => console.log(data))
//   .catch(error => console.log(error))







  // ------------------- Promise.all Promise.race

// const startTime = Date.now();

// const res1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "first", time:  deltaTime })
//     }, 3000)
//   })
// }

// const res2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "second", time:  deltaTime })
//     }, 1000)
//   })
// }

// const res3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "third", time:  deltaTime })
//     }, 5000)
//   })
// }


// res1()
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
  
// res2()
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// res3()
//   .then(data => console.log(data))
//   .catch(error => console.log(error))


// Promise.all([res1(), res2(), res3()])
//   .then(data => console.log(data))
//   .catch(error => console.log(error))


// Promise.race([res1(), res2(), res3()])
//   .then(data => console.log(data))
//   .catch(error => console.log(error))







